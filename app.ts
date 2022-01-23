const text = "Hello from Deno";

const encoder = new TextEncoder();

const encodedText = encoder.encode(text);

Deno.writeFile("sample.txt", encodedText).then((data) => {
  console.log(data);
});
