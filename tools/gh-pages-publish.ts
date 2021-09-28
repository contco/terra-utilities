const { cd, exec, echo, touch } = require("shelljs")
const { readFileSync } = require("fs")
const url = require("url")

const repoUrl = "https://github.com/contco/terra-utilities.git";
let pkg = JSON.parse(readFileSync("package.json") as any)


let parsedUrl = url.parse(repoUrl)
let repository = (parsedUrl.host || "") + (parsedUrl.path || "")
let ghToken = process.env.GH_TOKEN

echo("Deploying docs!!!")
cd("docs")
touch(".nojekyll")
exec("git init")
exec("git add .")
exec('git config user.name "Fahad-Mahmood"')
exec('git config user.email "fahad492@outlook.com"')
exec('git commit -m "docs(docs): update gh-pages"')
exec(
  `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
)
echo("Docs deployed!!")
