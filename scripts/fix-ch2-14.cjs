const fs = require('fs');

// New PWA-compatible code for B1_Ch2_14.py
const newCode = [
  "# B1_Ch2_14.py",
  "",
  "###############",
  "# Prepared by Jianbin Liang, Ran An, and Wei Lu,",
  "# Editor-in-chief: Weisheng Jiang, and Sheng Tu",
  "# Book 1  |  Financial Risk Management with Python",
  "# Published and copyrighted by Tsinghua University Press",
  "# Beijing, China, 2021",
  "###############",
  "import numpy as np",
  "from copy import deepcopy",
  "import pandas as pd",
  "#%% Generate the names of the files",
  "fre_list = np.arange(5.33,133.25+5.33,5.33)",
  "for i in np.arange(5):",
  "    if fre_list[i]>100:",
  "        fre_list[i]=np.around(fre_list[i],1)",
  "fre_list_round = [int(np.fix(i)) for i in fre_list]",
  "print('fre_list_round:', fre_list_round)",
  "#%% Generate random data and process (reduced size for browser)",
  "N = 10  # reduced from 1000 for browser compatibility",
  "for name in fre_list_round[:3]:",
  "    data1 = np.random.rand(N,2)",
  "    data2 = np.random.rand(N,2)",
  "    data1 = [complex(x,y) for x in data1[:,0] for y in data1[:,1]]",
  "    data2 = [complex(x,y) for x in data2[:,0] for y in data2[:,1]]",
  "    data = np.transpose(np.array([data1,data2]))",
  "    df = pd.DataFrame(data)",
  "    print()",
  "    print(f'=== {name}.csv (shape: {df.shape}) ===')",
  "    print(df.head())",
  "#%% Multiply by 100 and print (replaces to_excel)",
  "    da = deepcopy(data)",
  "    for i in np.arange(len(da[:,0])):",
  "        for j in np.arange(len(da[0,:])):",
  "           da[i,j] = da[i,j]*100",
  "    df = pd.DataFrame(da)",
  "    print(f'--- {name}_10timies (x100) ---')",
  "    print(df.head())",
  ""
].join("\n");

// Old code marker to find
const oldCodeMarker = "import csv\nimport numpy as np\nfrom copy import deepcopy";
const newCodeJsonValue = JSON.stringify(newCode);

// Helper: recursively find and update B1_Ch2_14.py in any JSON structure
function updateCode(obj, label) {
  if (!obj || typeof obj !== 'object') return 0;
  let count = 0;
  if (Array.isArray(obj)) {
    for (const item of obj) count += updateCode(item, label);
  } else {
    if (obj.filename === 'B1_Ch2_14.py' && obj.code) {
      console.log(`[${label}] Found B1_Ch2_14.py, old code length: ${obj.code.length}`);
      obj.code = newCode;
      console.log(`[${label}] Updated code length: ${obj.code.length}`);
      count++;
    }
    for (const val of Object.values(obj)) {
      if (typeof val === 'object') count += updateCode(val, label);
    }
  }
  return count;
}

// Process chapters_b1_ch2.json
const ch2Path = 'public/data/chapters_b1_ch2.json';
let ch2Json = JSON.parse(fs.readFileSync(ch2Path, 'utf8'));
const c1 = updateCode(ch2Json, 'chapters_b1_ch2.json');
console.log(`[chapters_b1_ch2.json] Updated ${c1} entries`);
fs.writeFileSync(ch2Path, JSON.stringify(ch2Json, null, 2), 'utf8');

// Process chapters.json
const chPath = 'public/data/chapters.json';
let chJson = JSON.parse(fs.readFileSync(chPath, 'utf8'));
const c2 = updateCode(chJson, 'chapters.json');
console.log(`[chapters.json] Updated ${c2} entries`);
fs.writeFileSync(chPath, JSON.stringify(chJson, null, 2), 'utf8');
