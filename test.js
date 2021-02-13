const fs = require('fs')
const path = require('path')

const str = 'ffd8ffe000104a46494600010101000000000000ffdb0043000c08090b09080c0b0a0b0e0d0c0e121e1412111112251a1c161e2c262e2d2b262a293036453b30334134292a3c523d41474a4d4e4d2f3a555b544b5a454c4d4affdb0043010d0e0e121012231414234a322a324a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4affc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffc000110800f0014003012100021101031101ffda000c03010002110311003f00f31a4a448da5a0029698c2834009476a006d140094b40c29280168a00296800a5140878a91450263c75a51cd1a122d2e28100f5a298c3b52520b8a68a004a5a3a00da3f1a16e217bfbd21a632ad25494252d300a5a18c4a2800a4a0425140c4a5ed40c29280168a0029681053a801c3ad480d048f14e03f2a2e20e94fa6200290d020a2930128ed4680252d5586251522b81f5141a00ab4da0d028a43168a6014502129281852500145030a2800a2800a5140829c2810fa90500c9053a9998b8a5a4018f4a18501a89da8a631693d690909477a0029298203452b88a94d348d04a5a63168a0028a003b5250025250505140076a4a042d2d031296800a70a04483ad48b45b421922f5a70a042e2969922d21a04068a06252e280128a004c514001141eb48452a4a4cd44a5a630a5ed40094b40c4ed49408434940c28ed40c28a04145002d1400538502251522d04928a70a091c68a09d05a43408303b514c7a8628a402514ca1b47f2a0485349480a5d29b41a094b48a61de96989875a29009da93b530129281852503168a00296800a5a0414e1d68024152ad043251f4a78a081d4b408290d030a281063ad140098a4c5030c73c5263da81030a4c50328521eb41a094503169714803b514c03b521a4210d37bd32828a06145020a2800a750014e5eb4089454cb413225514e14198ea777a1800a4239a090a5a371894638a006d2d031b8a4ed408283422919d486834129690d852d1b8d85140829298869a4a0a12968185140829681877a5a0414e14012af15320a0cd932d498a44dc514b834c914521a420a298c31c518a0065140c434508421a0f5a00cda6d2d0d83b52d03168a01876a290076a4a621b494ca0a281894b40077a5a0414b40053c504928eb530a09261e9525226c38d2d3b101451e42129681dc4a31400da318a18c29a45000692842466521a46f7128a063a8a0028a401494c043494c625140c28a401453016945020a78a044ab53a5172244e9c9a781423363f1463da8b887605230e68175108a5ed40098a4a43100a3e94f71898a6f6a57010d07ad01d0cb14941b894b400b4b40052d0210d21a0069a4a650da5a0614502168a0614b4082a45a09255a9d0508864e2a514881fd28228448529a62129314007ad07a5218da298c4a4a004c521a4232a9a683a40d028b00e14500c3ffd8ffe000104a46494600010101000000000000ffdb0043000c08090b09080c0b0a0b0e0d0c0e121e1412111112251a1c161e2c262e2d2b262a293036453b30334134292a3c523d41474a4d4e4d2f3a555b544b5a454c4d4affdb0043010d0e0e121012231414234a322a324a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4a4affc4001f0000010501010101010100000000000000000102030405060708090a0bffc400b5100002010303020403050504040000017d01020300041105122131410613516107227114328191a1082342b1c11552d1f02433627282090a161718191a25262728292a3435363738393a434445464748494a535455565758595a636465666768696a737475767778797a838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae1e2e3e4e5e6e7e8e9eaf1f2f3f4f5f6f7f8f9faffc4001f0100030101010101010101010000000000000102030405060708090a0bffc400b51100020102040403040705040400010277000102031104052131061241510761711322328108144291a1b1c109233352f0156272d10a162434e125f11718191a262728292a35363738393a434445464748494a535455565758595a636465666768696a737475767778797a82838485868788898a92939495969798999aa2a3a4a5a6a7a8a9aab2b3b4b5b6b7b8b9bac2c3c4c5c6c7c8c9cad2d3d4d5d6d7d8d9dae2e3e4e5e6e7e8e9eaf2f3f4f5f6f7f8f9faffc000110800f0014003012100021101031101ffda000c03010002110311003f00f30a4a004a514005140052d00276a280129280129681894b40828a0614b4082945003aa415455c7afb528a10875250d0851d28a0aea252d026252d201296980da31542034b52055a4a91094b40c29680128ef40051400da280129681894b40828a0614b40829c2980ea78a3a0120eb4ea630a0502b0a28355b830a290094b4806d2e38aa6020a0d200ef477a4055a4a901296800a2800a5a004a4a004a2800a4a005a4a005a2800a5a00296980f1522d00c9169c2a80296800a4a005a5a0625148426296980da2840068a5e8054a4a910945031c28a004a5a003b5368dc029280128a062d140829680129681853875a621e2a45a009169c055218b4b40829280ea14b4804a29809450018c5252400d4628029d2548094b400b45030a281076a4a004a4a004a281852d020a2800a5a0029c2980f1520a009453aa900ea2806c5a4c5300a3140303462a06c4ef4550098a0d3b8843454ee053a69a90129680168a0028a005e829b4009494005140c28a0414b40094b400b4a3ad00482a55a6048053c0e2ac62d2d20014531076a00a401494005140094868010d18a41729534d47500a5a6014500145002f6a69a2c0252500251400b4500145002d1400b4e14c090548b40132d3e98c5a5db40828c5318514c04c51daa44262835402628a40235252028d36a41852d0014500c5a28013b5140094da004a5a0029280168a005a5a0029c280245a95698130a7814d0c77e1455085a08a40252e280128c51d03cc6d14d8c29b484068a4067d2540094b4c02968061451d000f4a4a00434da004a5a0028a0028a005a5a0029e2981228a99680265a78aa01d8f5a5a900a435483a8b450313148290ac252d318da4348421a3bd3033692a0029680145140c5a4a041450034d36800a2818514085a2800a5a0029e298120a9d680265a78aa431d4b4842fad21a630c52e314098949405c4a281898a6d020a4c5203369b52c029680168a062d14084ed4500369280128a0028a005a2800a5a100b4e14012ad4e94c0996a51d298c5a5c5310518a6014b45c042293b5201b4b4c04a4a4034d1480cba4a801297bd30168a062d14083b521a40369298094500145002d140c29681053c75a604aa2ac2530274a900a603a9dde8001486800ed450836128a006d18a2e02628352034d253406552548094b4805a5ed4c61400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003232ca5584abb96494b9a2e02d2517d442526690c5a4cd03d04ef46686036834ae2d869345211fffd9'

const hexBuf = Buffer.from(str, 'hex')



// fs.writeFile(`./${Date.now()}.jpg`, hexBuf, function(err) {
//   if(err) {console.log(err)}
// });

fs.readFile(`./img/11.jpg`, function(err,buf) {
  console.log(buf.toString('hex'));
});