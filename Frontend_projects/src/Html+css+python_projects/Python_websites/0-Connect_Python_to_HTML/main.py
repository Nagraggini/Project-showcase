from pyscript import document

print("Hello World, From The Web")  # Láthatod a konzolon a szöveget.

output_div = document.querySelector("#textarea")

output_div.innerText = "Hello World, From The Web"  # You can see on website
