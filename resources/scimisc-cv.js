const fontPackage = `
        % Quickly hacked together from .docx sample provided by Scimisc
        \\RequirePackage{ifpdf,ifxetex,ifluatex}
        \\ifpdf
        \\RequirePackage{cmap}
        \\RequirePackage[utf8]{inputenc}
        \\RequirePackage[T1]{fontenc}
        \\input{glyphtounicode}
        \\pdfglyphtounicode{f_f}{FB00}
        \\pdfglyphtounicode{f_f_i}{FB03}
        \\pdfglyphtounicode{f_f_l}{FB04}
        \\pdfglyphtounicode{f_i}{FB01}
        \\pdfgentounicode=1
        \\fi
        \\RequirePackage{caladea}
        \\RequirePackage{carlito}
        \\renewcommand{\\familydefault}{\\sfdefault}

        \\RequirePackage{geometry}
        \\RequirePackage{parskip}
        \\RequirePackage{enumitem}
        \\RequirePackage{textcase}
        \\RequirePackage{xparse}
        \\RequirePackage{needspace}
        \\RequirePackage[compact,small,explicit]{titlesec}

        \\def\\scimisc@cvname{}
        \\def\\scimisc@cvpersonalinfo{}
        \\def\\cvinfosep{\\hfill|\\hfill{}}

        \\newcommand{\\cvname}[1]{\\def\\scimisc@cvname{#1}}
        \\newcommand{\\cvpersonalinfo}[1]{\\def\\scimisc@cvpersonalinfo{#1}}

        \\newcommand{\\cvtitlefamily}{\\rmfamily}
        \\newcommand{\\cvnamefont}{\\cvtitlefamily\\huge\\bfseries}
        \\newcommand{\\cvpersonalinfofont}{\\normalsize}

        \\newcommand{\\makecvtitle}{%
        \\begin{center}
        {\\cvnamefont\\MakeTextUppercase{\\scimisc@cvname}\\par}
        \\vskip4pt\\hrule height 0.6pt \\relax
        {\\cvpersonalinfofont\\scimisc@cvpersonalinfo\\par}
        \\end{center}\\medskip
        }

        \\NewDocumentCommand{\\cvsubsection}{m o o o}{%
        %   \\vspace{\\parskip}%
        \\needspace{4\\baselineskip}%
        \\textbf{#1}%
        \\IfValueT{#2}{\\hfill\\textbf{#2}}%
        \\IfValueT{#3}{\\IfValueT{#4}{\\\\}}%
        \\IfValueT{#3}{\\emph{#3}}%
        \\IfValueT{#4}{\\hfill\\emph{#4}}
        \\par\\vspace{-\\parskip}
        }

        \\geometry{a4paper,margin=0.5in}
        \\titleformat{\\section}
        {\\bfseries\\rmfamily\\large}{\\thesection}{0pt}{\\MakeTextUppercase{#1}}[{\\titlerule[0.6pt]}]
        \\setlist{leftmargin=*,nosep}

        \\pagestyle{empty}
        \\setcounter{secnumdepth}{0}
        `

module.exports = fontPackage;