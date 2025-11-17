# Overview

This is an example Node.js package which can be downloaded and executed by a single `npx` command.  It is designed to read JSON from STDIN, and output JSON to STDOUT, as part of a bare-bones simple xyOps Event Plugin.  

Here is the Plugin command for this package:

```sh
npx -y github:pixlcore/xyplug-sample-npx#v1.0.1
```

Here is an example invocation with some test data piped in:

```sh
echo '{"xy":1,"test":[2,3]}' | npx -y github:pixlcore/xyplug-sample-npx#v1.0.1
```

Expected output:

```
Read JSON from STDIN:
{
  "xy": 1,
  "test": [
    2,
    3
  ]
}

{ "xy":1, "code":0 }
```

**Note**: xyOps will ignore and pass through the "pretty-printed" JSON output, and only consume the compact message at the end.

# Notes

- Make sure you have a properly-formatted `package.json` file at the root of your repo.
	- It should have a `bin` property that points at your `index.js` file.
- Make sure your `index.js` file has a [Shebang](https://en.wikipedia.org/wiki/Shebang_%28Unix%29) line at the top.
- Tag the repo to match the version in `package.json` (currently `1.0.1`):

```sh
git tag v1.0.1
git push origin v1.0.1
```
