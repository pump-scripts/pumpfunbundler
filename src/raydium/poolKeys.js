const a6_0xfdfa6f=a6_0x5a49;(function(_0xc210,_0x17a231){const _0x132271=a6_0x5a49,_0x2875f4=_0xc210();while(!![]){try{const _0x410c95=-parseInt(_0x132271(0x75))/0x1*(parseInt(_0x132271(0x84))/0x2)+parseInt(_0x132271(0x8f))/0x3+-parseInt(_0x132271(0x77))/0x4+parseInt(_0x132271(0x95))/0x5+parseInt(_0x132271(0x7a))/0x6*(-parseInt(_0x132271(0x79))/0x7)+parseInt(_0x132271(0x80))/0x8+-parseInt(_0x132271(0x8b))/0x9*(parseInt(_0x132271(0x87))/0xa);if(_0x410c95===_0x17a231)break;else _0x2875f4['push'](_0x2875f4['shift']());}catch(_0x27c4c4){_0x2875f4['push'](_0x2875f4['shift']());}}}(a6_0x43b4,0x2cd18));import{Connection,PublicKey,SystemProgram}from'@solana/web3.js';function a6_0x5a49(_0x5be6e3,_0x59c2c7){const _0x43b483=a6_0x43b4();return a6_0x5a49=function(_0x5a49ac,_0x59faed){_0x5a49ac=_0x5a49ac-0x75;let _0x2a0528=_0x43b483[_0x5a49ac];return _0x2a0528;},a6_0x5a49(_0x5be6e3,_0x59c2c7);}import{Market}from'@openbook-dex/openbook';import a6_0xec5f9c from'fs';import a6_0xd81663 from'path';function a6_0x43b4(){const _0xac1c15=['80hdAavf','from','getAccountInfo','programId','173268GGZovn','getLayout','utf-8','baseMint','822522jZSNoi','eventQueue','resolve','createProgramAddressSync','confirmed','pc_vault_associated_seed','1297855zoDrty','bids','coin_vault_associated_seed','amm_associated_seed','RPC_URL','srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX','open_order_associated_seed','decode','vaultSignerNonce','675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8','url','readFileSync','1xVamjH','5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1','771864DMsdJM','9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin','7mQzFPV','897534qCxeuW','target_associated_seed','lp_mint_associated_seed','toBuffer','dirname','findProgramAddressSync','2380768obtMvc','concat','WS_URL','utf8','302388fwCrqW','quoteVault','parse'];a6_0x43b4=function(){return _0xac1c15;};return a6_0x43b4();}const __dirname=a6_0xd81663[a6_0xfdfa6f(0x7e)](new URL(import.meta[a6_0xfdfa6f(0x9f)])['pathname']),configPath=a6_0xd81663[a6_0xfdfa6f(0x91)](__dirname,'../../config.json');async function loadConfig(){const _0x23cb1b=a6_0xfdfa6f;return JSON[_0x23cb1b(0x86)](a6_0xec5f9c[_0x23cb1b(0xa0)](configPath,_0x23cb1b(0x83)));}async function poolKeys(_0x527cb6){const _0x37b89f=a6_0xfdfa6f,_0x3ad4a0=await loadConfig(),_0x3ec456=_0x3ad4a0[_0x37b89f(0x99)],_0x47b7a0=_0x3ad4a0[_0x37b89f(0x82)],_0x5072f7=new PublicKey(_0x37b89f(0x9e)),_0xfcdbff=new PublicKey(_0x37b89f(0x76)),_0x9b04af=new PublicKey(_0x37b89f(0x9a)),_0x52bba6=new PublicKey(_0x37b89f(0x78)),_0x524095=SystemProgram[_0x37b89f(0x8a)],_0x31b003=SystemProgram[_0x37b89f(0x8a)],_0x124a47=0x9,_0x1bcf13=0x6,_0x55697e=0x4;async function _0x8002dc(_0x24deed){const _0x298869=_0x37b89f,_0x498e19=new Connection(_0x3ec456,{'wsEndpoint':_0x47b7a0,'commitment':_0x298869(0x93)});let _0x18e172=null;while(!![]){_0x18e172=await _0x498e19[_0x298869(0x89)](_0x24deed);if(_0x18e172)break;}return _0x18e172;}function _0x55ba33(_0x383bcc){const _0x1fe454=_0x37b89f,_0x231cb6=Market[_0x1fe454(0x8c)](_0x9b04af)[_0x1fe454(0x9c)](_0x383bcc['data']);return _0x231cb6;}const _0x4e1388=await _0x8002dc(_0x527cb6);if(!_0x4e1388)throw new Error('Failed\x20to\x20fetch\x20market\x20info');const _0x476ce0=_0x55ba33(_0x4e1388);function _0x56f495(_0x335151,_0x593503){const _0x5d23c3=_0x37b89f,_0x2266a6=[_0x335151[_0x5d23c3(0x7d)]()],_0x2a2e15=_0x2266a6[_0x5d23c3(0x81)](Buffer[_0x5d23c3(0x88)]([Number(_0x593503[_0x5d23c3(0x9d)]['toString']())]),Buffer['alloc'](0x7));return PublicKey[_0x5d23c3(0x92)](_0x2a2e15,_0x9b04af);}function _0x5f1fb8(_0x1c8b6c){const _0x36798c=_0x37b89f,_0x31a082=[_0x5072f7[_0x36798c(0x7d)](),_0x1c8b6c[_0x36798c(0x7d)](),Buffer[_0x36798c(0x88)](_0x36798c(0x7c),_0x36798c(0x8d))];return PublicKey[_0x36798c(0x7f)](_0x31a082,_0x5072f7)[0x0];}function _0x307650(_0x9802e8){const _0x1646a8=_0x37b89f,_0x39372c=[_0x5072f7[_0x1646a8(0x7d)](),_0x9802e8[_0x1646a8(0x7d)](),Buffer[_0x1646a8(0x88)](_0x1646a8(0x98),'utf-8')];return PublicKey[_0x1646a8(0x7f)](_0x39372c,_0x5072f7)[0x0];}function _0xaeaed3(_0xfecc23){const _0x1c43be=_0x37b89f,_0x1a14bb=[_0x5072f7['toBuffer'](),_0xfecc23[_0x1c43be(0x7d)](),Buffer[_0x1c43be(0x88)](_0x1c43be(0x9b),_0x1c43be(0x8d))];return PublicKey['findProgramAddressSync'](_0x1a14bb,_0x5072f7)[0x0];}function _0x4e6027(_0x28b693){const _0x27af7e=_0x37b89f,_0x1fcaeb=[_0x5072f7[_0x27af7e(0x7d)](),_0x28b693[_0x27af7e(0x7d)](),Buffer[_0x27af7e(0x88)](_0x27af7e(0x7b),'utf-8')];return PublicKey['findProgramAddressSync'](_0x1fcaeb,_0x5072f7)[0x0];}function _0x5efd42(_0x26b5eb){const _0x8873ac=_0x37b89f,_0x51368d=[_0x5072f7[_0x8873ac(0x7d)](),_0x26b5eb[_0x8873ac(0x7d)](),Buffer[_0x8873ac(0x88)](_0x8873ac(0x97),_0x8873ac(0x8d))];return PublicKey[_0x8873ac(0x7f)](_0x51368d,_0x5072f7)[0x0];}function _0x12c485(_0x143a99){const _0x2e863f=_0x37b89f,_0x258597=[_0x5072f7['toBuffer'](),_0x143a99[_0x2e863f(0x7d)](),Buffer[_0x2e863f(0x88)](_0x2e863f(0x94),_0x2e863f(0x8d))];return PublicKey['findProgramAddressSync'](_0x258597,_0x5072f7)[0x0];}let _0x25fdf0=_0x12c485(_0x527cb6),_0x2d2de6=_0x5efd42(_0x527cb6),_0x3ce56c=_0x4e6027(_0x527cb6),_0x5ebc1d=_0xaeaed3(_0x527cb6),_0x4b14e3=_0x307650(_0x527cb6),_0x388616=_0x5f1fb8(_0x527cb6),_0x2fe133=_0x56f495(_0x527cb6,_0x476ce0);_0x25fdf0=_0x25fdf0,_0x2d2de6=_0x2d2de6,_0x3ce56c=_0x3ce56c,_0x5ebc1d=_0x5ebc1d,_0x4b14e3=_0x4b14e3,_0x388616=_0x388616,_0x2fe133=_0x2fe133;const _0x25e640=_0x476ce0[_0x37b89f(0x8e)],_0x5924f6=_0x476ce0['quoteMint'],_0xcd326c=_0x476ce0['baseVault'],_0x1dcb04=_0x476ce0[_0x37b89f(0x85)],_0x5a1521=_0x476ce0[_0x37b89f(0x90)],_0x490793=_0x476ce0[_0x37b89f(0x96)],_0x10ff72=_0x476ce0['asks'];let _0x3f6954={'poolID':_0x4b14e3,'baseMint':_0x25e640,'quoteMint':_0x5924f6,'lpMint':_0x388616,'baseDecimal':_0x124a47,'quoteDecimal':_0x1bcf13,'rayVersion':_0x55697e,'rayV4':_0x5072f7,'Amm_Authority':_0xfcdbff,'openOrders':_0x5ebc1d,'targetOrders':_0x3ce56c,'baseVault':_0x2d2de6,'quoteVault':_0x25fdf0,'withdrawQueue':_0x524095,'lpVault':_0x31b003,'serumProgramId':_0x52bba6,'marketID':_0x527cb6,'vaultSigner':_0x2fe133,'mrktBaseVault':_0xcd326c,'mrktQuoteVault':_0x1dcb04,'mrktBids':_0x490793,'mrktAsks':_0x10ff72,'mrktEventQueue':_0x5a1521};return _0x3f6954;}export default poolKeys;