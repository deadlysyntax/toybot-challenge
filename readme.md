# Jaap's toybot
To install:
Requires Node 7.6+ (uses async/await)
```
git clone git@github.com:deadlysyntax/toybot-test.git

cd toybot

npm install

```

To start the bot:
```
npm run start
```

To place the bot:

```
place 3,4,w
```

Where 3 = x axis, 4 = y axis, w = cardinal direction. You may use lowercase or uppercase commands. Use N,S,E or W to define the direction the bot is facing.

```
move
```

To advance one place in the direction you're facing. You will be prompted to retry if you place the bot off the grid or attempt to move there.

To turn:

```
left
```

and

```
right
```

To test the bot:
```
npm run test
```
