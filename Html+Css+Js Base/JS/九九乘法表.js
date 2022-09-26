for (var n = 1; n < 10; n++) {
            //循环输出每行内容
            for (var m = 1; m <= n; m++) {
                document.write(m + "*" + n + "=" + (m * n) + "&nbsp");
            }
            document.write("<br/>");
        }