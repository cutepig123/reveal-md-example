set me=%~dp0%
rem set THEME=--theme white
node "%me%\node_modules\reveal-md\bin\reveal-md.js"  %1 --preprocessor preproc.js -w %THEME% --print %1.pdf

pause
