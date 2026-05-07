import sys


def scan_braces(path: str) -> int:
    with open(path, "r", encoding="utf-8") as f:
        s = f.read()

    line = 1
    col = 0
    depth = 0
    stack = []
    state = "code"
    quote = None

    i = 0
    while i < len(s):
        ch = s[i]
        nxt = s[i + 1] if i + 1 < len(s) else ""

        if ch == "\n":
            line += 1
            col = 0
        else:
            col += 1

        if state == "code":
            if ch == "/" and nxt == "/":
                state = "line_comment"
                i += 1
            elif ch == "/" and nxt == "*":
                state = "block_comment"
                i += 1
            elif ch in ('"', "'", "`"):
                state = "string"
                quote = ch
            elif ch == "{":
                depth += 1
                stack.append((line, col))
            elif ch == "}":
                depth -= 1
                if stack:
                    stack.pop()
                if depth < 0:
                    print(f"First negative brace at {line}:{col}")
                    start = max(0, i - 120)
                    end = min(len(s), i + 120)
                    ctx = s[start:end].replace("\n", "\\n")
                    print("Context:", ctx)
                    return 2

        elif state == "string":
            if quote == "`":
                if ch == "\\":
                    i += 1
                elif ch == "$" and nxt == "{":
                    state = "tpl_expr"
                    depth += 1
                    stack.append((line, col))
                    i += 1
                elif ch == "`":
                    state = "code"
                    quote = None
            else:
                if ch == "\\":
                    i += 1
                elif ch == quote:
                    state = "code"
                    quote = None

        elif state == "tpl_expr":
            if ch == "/" and nxt == "/":
                state = "line_comment_tpl"
                i += 1
            elif ch == "/" and nxt == "*":
                state = "block_comment_tpl"
                i += 1
            elif ch in ('"', "'", "`"):
                state = "string_tpl"
                quote = ch
            elif ch == "{":
                depth += 1
                stack.append((line, col))
            elif ch == "}":
                depth -= 1
                if stack:
                    stack.pop()
                if depth == 0:
                    state = "string"
                    quote = "`"

        elif state == "line_comment":
            if ch == "\n":
                state = "code"

        elif state == "block_comment":
            if ch == "*" and nxt == "/":
                state = "code"
                i += 1

        elif state == "line_comment_tpl":
            if ch == "\n":
                state = "tpl_expr"

        elif state == "block_comment_tpl":
            if ch == "*" and nxt == "/":
                state = "tpl_expr"
                i += 1

        elif state == "string_tpl":
            if quote == "`":
                if ch == "\\":
                    i += 1
                elif ch == "$" and nxt == "{":
                    depth += 1
                    stack.append((line, col))
                    state = "tpl_expr"
                    i += 1
                elif ch == "`":
                    state = "tpl_expr"
                    quote = None
            else:
                if ch == "\\":
                    i += 1
                elif ch == quote:
                    state = "tpl_expr"
                    quote = None

        i += 1

    print("No negative brace. Final brace depth =", depth)
    if depth != 0:
        print("Unclosed brace positions (last 12):", stack[-12:])
    return 0 if depth == 0 else 3


def main() -> int:
    path = sys.argv[1] if len(sys.argv) > 1 else "bundle.js"
    return scan_braces(path)


if __name__ == "__main__":
    raise SystemExit(main())
