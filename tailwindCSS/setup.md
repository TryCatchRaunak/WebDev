# How to setup TailwindCSS ?

Step 1: Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file to include this line

```
content: ["*.html"]
```

Step 3: Create src/input.css to include following lines

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

```
<link rel="stylesheet" href="src/output.css">
```

Step 5: Run the following command
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```



### Note:

We can use certain websites such as ```play.tailwind``` and ```tailblocks``` to make our html css grinding task much easier with the help of TailwindCSS