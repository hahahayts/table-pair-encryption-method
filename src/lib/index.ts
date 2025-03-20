const tables: { [key: string]: string } = {
  table1: "ABCDEF",
  table2: "HIJKLM",
  table3: "NOPQRS",
  table4: "UVWXYZ",
  table5: "GT", // G and T will be swapped
};

const transform = (text: string): string => {
  let transformedText: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === "@") {
      transformedText.push(" "); // Replace '@' with space
      continue;
    }

    let transformedChar = char; // Default to itself

    // Swap Table 1 <-> Table 4
    for (let j = 0; j < tables.table1.length; j++) {
      if (char === tables.table1[j]) {
        transformedChar = tables.table4[j];
        break;
      }
      if (char === tables.table4[j]) {
        transformedChar = tables.table1[j];
        break;
      }
    }

    // Swap Table 2 <-> Table 3
    for (let j = 0; j < tables.table2.length; j++) {
      if (char === tables.table3[j]) {
        transformedChar = tables.table2[j];
        break;
      }
      if (char === tables.table2[j]) {
        transformedChar = tables.table3[j];
        break;
      }
    }

    // Swap G <-> T
    if (char === "G") {
      transformedChar = "T";
    } else if (char === "T") {
      transformedChar = "G";
    }

    transformedText.push(transformedChar);
  }

  return transformedText.join("");
};

const encrypt = (text: string): string => transform(text);
const decrypt = (text: string): string => transform(text); // Symmetric transformation

export { encrypt, decrypt };
