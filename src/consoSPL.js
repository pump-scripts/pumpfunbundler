const a83_0xfc04a2=a83_0x2a9f;function a83_0x2a9f(_0x251a8b,_0x51f7fb){const _0x4d4d20=a83_0x4d4d();return a83_0x2a9f=function(_0x2a9fe7,_0x2286e2){_0x2a9fe7=_0x2a9fe7-0x162;let _0x5acb2c=_0x4d4d20[_0x2a9fe7];return _0x5acb2c;},a83_0x2a9f(_0x251a8b,_0x51f7fb);}(function(_0x5b1bbd,_0x1f5649){const _0x51a88b=a83_0x2a9f,_0x2e7ac2=_0x5b1bbd();while(!![]){try{const _0x32010f=parseInt(_0x51a88b(0x187))/0x1+-parseInt(_0x51a88b(0x181))/0x2+-parseInt(_0x51a88b(0x172))/0x3*(parseInt(_0x51a88b(0x17f))/0x4)+-parseInt(_0x51a88b(0x175))/0x5*(-parseInt(_0x51a88b(0x16e))/0x6)+parseInt(_0x51a88b(0x190))/0x7*(parseInt(_0x51a88b(0x180))/0x8)+parseInt(_0x51a88b(0x197))/0x9*(-parseInt(_0x51a88b(0x170))/0xa)+parseInt(_0x51a88b(0x188))/0xb*(parseInt(_0x51a88b(0x192))/0xc);if(_0x32010f===_0x1f5649)break;else _0x2e7ac2['push'](_0x2e7ac2['shift']());}catch(_0x135eb8){_0x2e7ac2['push'](_0x2e7ac2['shift']());}}}(a83_0x4d4d,0xe84e6));import{PublicKey,Keypair,Connection,Transaction,TransactionMessage,VersionedTransaction,sendAndConfirmTransaction}from'@solana/web3.js';import{createAssociatedTokenAccountInstruction,getAssociatedTokenAddress,createTransferInstruction,TOKEN_PROGRAM_ID}from'@solana/spl-token';function a83_0x4d4d(){const _0x32a9bb=['toString','Wallet\x20SOL\x20balance\x20too\x20low\x20for\x20wallet\x20','compileToV0Message','push','Bundle\x20','message','error','ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt','yellow','42sMphPN','keypair','25550lLFDjb','publicKey','3513687eIfyba','toBase58','No\x20valid\x20transactions\x20to\x20process.','84875qgGaIk','blockhash','match','./config.json','sign',',\x20skipping.','map','Sleeping\x20for\x20','getLatestBlockhash','filter','4uSKBIZ','8VzGMkP','476882UfsRZh','Error\x20occurred\x20while\x20sending\x20SPL\x20tokens:','96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5','log','utf8','Number\x20of\x20transactions\x20in\x20the\x20bundle:','1553792FTbPOi','11jcwFSy','Token\x20balance\x20too\x20low\x20(empty)\x20for\x20wallet\x20','sort','Confirm\x20Bundle\x20Manually\x20(JITO):\x20https://explorer.jito.wtf/bundle/',',\x20skipping.\x0a','dirname','Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY','endsWith','1027201mJHJUX','amount','20268372HUGUBT','DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh','parse','finalized','join','4041fCCPVy','Receiver\x20ATA:\x20','length','url','slice','getAccountInfo','value','decode','getTokenAccountBalance','transactions','readFileSync','from','floor','green','Account\x20does\x20not\x20exist.\x20Creating\x20a\x20new\x20one.','getBalance','sendBundle','all','red','DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL','fromSecretKey','uiAmount','confirmed','\x20ms\x20before\x20sending\x20next\x20bundle...','ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49'];a83_0x4d4d=function(){return _0x32a9bb;};return a83_0x4d4d();}import{searcherClient}from'jito-ts/dist/sdk/block-engine/searcher.js';import{Bundle}from'jito-ts/dist/sdk/block-engine/types.js';import a83_0x3604c5 from'fs';import a83_0xdca996 from'path';import{fileURLToPath}from'url';import a83_0x3dc0ae from'bs58';import a83_0x286a51 from'chalk';const __filename=fileURLToPath(import.meta[a83_0xfc04a2(0x19a)]),__dirname=a83_0xdca996[a83_0xfc04a2(0x18d)](__filename);async function sleep(_0x5f5cb2){return new Promise(_0x5cb3aa=>setTimeout(_0x5cb3aa,_0x5f5cb2));}async function getOrCreateAssociatedTokenAccount(_0x177737,_0x46a6a9,_0x248d3c,_0x9241b6){const _0x2b4a61=a83_0xfc04a2,_0x188ba9=await getAssociatedTokenAddress(_0x248d3c,_0x9241b6);try{const _0x330e3c=await _0x177737[_0x2b4a61(0x19c)](_0x188ba9);if(_0x330e3c)return _0x188ba9;}catch(_0x3f8c37){console[_0x2b4a61(0x184)](_0x2b4a61(0x1a5));}const _0x57f09b=createAssociatedTokenAccountInstruction(_0x46a6a9[_0x2b4a61(0x171)],_0x188ba9,_0x9241b6,_0x248d3c),_0x249e14=new Transaction()['add'](_0x57f09b);return await sendAndConfirmTransaction(_0x177737,_0x249e14,[_0x46a6a9],{'skipPreflight':![],'preflightCommitment':_0x2b4a61(0x162)}),_0x188ba9;}async function consoSPLT(_0x3088ee){const _0x22e7f3=a83_0xfc04a2,_0x39991c=JSON['parse'](a83_0x3604c5[_0x22e7f3(0x1a1)](_0x22e7f3(0x178),'utf8')),{RPC_URL:_0x15beb3,WS_URL:_0x19e423,BLOCK_ENGINE_URL:_0x41abbf,JITO_TIP_SECRET_KEY:_0x25f84b,JITO_TIP_AMOUNT:_0x2020b8,SECRET_KEY_PATH:_0x451194,WALLET_BUYERS_FOLDER:_0x22abfb,DELAY:DELAY=0xc8}=_0x39991c,_0x5cccc3=Keypair['fromSecretKey'](new Uint8Array(a83_0x3dc0ae[_0x22e7f3(0x19e)](_0x25f84b))),_0x289f8a=_0x2020b8*0x3b9aca00,_0x1257f8=new PublicKey(_0x3088ee),_0x66c077=Keypair[_0x22e7f3(0x1ab)](Uint8Array[_0x22e7f3(0x1a2)](JSON[_0x22e7f3(0x194)](a83_0x3604c5[_0x22e7f3(0x1a1)](_0x451194,_0x22e7f3(0x185))))),_0x578e8d=_0x66c077[_0x22e7f3(0x171)],_0x4721da=a83_0x3604c5['readdirSync'](_0x22abfb)[_0x22e7f3(0x17e)](_0x1fba3b=>_0x1fba3b[_0x22e7f3(0x18f)]('.json'))[_0x22e7f3(0x18a)]((_0x2e40a9,_0x2869a3)=>parseInt(_0x2e40a9[_0x22e7f3(0x177)](/\d+/)[0x0],0xa)-parseInt(_0x2869a3[_0x22e7f3(0x177)](/\d+/)[0x0],0xa)),_0x5e2063=_0x4721da['map'](_0xa47faa=>Keypair['fromSecretKey'](Uint8Array[_0x22e7f3(0x1a2)](JSON[_0x22e7f3(0x194)](a83_0x3604c5[_0x22e7f3(0x1a1)](a83_0xdca996[_0x22e7f3(0x196)](_0x22abfb,_0xa47faa),_0x22e7f3(0x185)))))),_0x4a9026=new Connection(_0x15beb3,{'commitment':'confirmed','wsEndpoint':_0x19e423});let _0x2d56e7;try{_0x2d56e7=await getOrCreateAssociatedTokenAccount(_0x4a9026,_0x66c077,_0x1257f8,_0x578e8d),console[_0x22e7f3(0x184)](a83_0x286a51[_0x22e7f3(0x1a4)](_0x22e7f3(0x198)+_0x2d56e7[_0x22e7f3(0x173)]()));}catch(_0x1dc582){console['error'](a83_0x286a51['red']('Failed\x20to\x20get\x20or\x20create\x20receiver\x27s\x20ATA:\x20'+_0x1dc582[_0x22e7f3(0x16a)]));return;}const _0x551229=0x6,_0x48f23f=0x4,_0x3913cc=await Promise[_0x22e7f3(0x1a8)](_0x5e2063[_0x22e7f3(0x17b)](async _0x24c3f5=>{const _0x1e0c5a=_0x22e7f3;try{const _0x599501=_0x24c3f5[_0x1e0c5a(0x171)];let _0x5c73dc=await _0x4a9026[_0x1e0c5a(0x1a6)](_0x599501),_0xb96a24=_0x5c73dc/0x3b9aca00;if(_0xb96a24<=0.001)return console['log'](a83_0x286a51[_0x1e0c5a(0x1a9)](_0x1e0c5a(0x166)+_0x599501[_0x1e0c5a(0x165)]()+_0x1e0c5a(0x17a))),null;const _0x347456=await _0x4a9026['getTokenAccountsByOwner'](_0x599501,{'mint':_0x1257f8});if(_0x347456[_0x1e0c5a(0x19d)][_0x1e0c5a(0x199)]===0x0)return console[_0x1e0c5a(0x184)](a83_0x286a51['red']('No\x20token\x20account\x20found\x20for\x20wallet\x20'+_0x599501['toString']()+_0x1e0c5a(0x18c))),null;const _0x591ada=_0x347456[_0x1e0c5a(0x19d)][0x0]['pubkey'];let _0x2b7577=await _0x4a9026[_0x1e0c5a(0x19f)](_0x591ada),_0x5c5d67=_0x2b7577[_0x1e0c5a(0x19d)][_0x1e0c5a(0x191)];_0x2b7577=_0x2b7577['value'][_0x1e0c5a(0x1ac)];if(_0x2b7577<=0x0)return console[_0x1e0c5a(0x184)](a83_0x286a51[_0x1e0c5a(0x1a9)](_0x1e0c5a(0x189)+_0x599501[_0x1e0c5a(0x165)]()+_0x1e0c5a(0x18c))),null;const _0x1d4b33=createTransferInstruction(_0x591ada,_0x2d56e7,_0x599501,_0x5c5d67,[],TOKEN_PROGRAM_ID);return{'instruction':_0x1d4b33,'keypair':_0x24c3f5,'owner':_0x599501};}catch(_0x3825b1){return console['error']('Error\x20processing\x20wallet\x20'+_0x24c3f5[_0x1e0c5a(0x171)][_0x1e0c5a(0x165)]()+':',_0x3825b1),null;}})),_0x3dd015=_0x3913cc['filter'](_0xccd7db=>_0xccd7db!==null);if(_0x3dd015['length']===0x0){console['log'](a83_0x286a51[_0x22e7f3(0x16d)](_0x22e7f3(0x174)));return;}for(let _0x596a4b=0x0;_0x596a4b<_0x3dd015['length'];_0x596a4b+=_0x48f23f*_0x551229){const _0x464e5b=_0x3dd015[_0x22e7f3(0x19b)](_0x596a4b,_0x596a4b+_0x48f23f*_0x551229),_0x17c67a=[];for(let _0x4ddd6f=0x0;_0x4ddd6f<_0x464e5b[_0x22e7f3(0x199)];_0x4ddd6f+=_0x551229){const _0x2ea934=_0x464e5b['slice'](_0x4ddd6f,_0x4ddd6f+_0x551229),_0x5b0318=_0x2ea934[_0x22e7f3(0x17b)](_0x3b60b6=>_0x3b60b6['instruction']),_0x2068d7=_0x2ea934[_0x22e7f3(0x17b)](_0x5d51ad=>_0x5d51ad[_0x22e7f3(0x16f)]),_0x3022e2=(await _0x4a9026[_0x22e7f3(0x17d)](_0x22e7f3(0x195)))[_0x22e7f3(0x176)],_0x377eaa=new TransactionMessage({'payerKey':_0x578e8d,'instructions':_0x5b0318,'recentBlockhash':_0x3022e2})[_0x22e7f3(0x167)](),_0x5a4580=new VersionedTransaction(_0x377eaa);_0x5a4580[_0x22e7f3(0x179)]([_0x66c077,..._0x2068d7]),_0x17c67a[_0x22e7f3(0x168)](_0x5a4580);}const _0x1dfe9d=searcherClient(_0x41abbf),_0x39ec63=[_0x22e7f3(0x183),'HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe',_0x22e7f3(0x18e),_0x22e7f3(0x164),_0x22e7f3(0x193),_0x22e7f3(0x16c),_0x22e7f3(0x1aa),'3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT'],_0xf1a589=Math[_0x22e7f3(0x1a3)](Math['random']()*_0x39ec63[_0x22e7f3(0x199)]),_0x36b067=new PublicKey(_0x39ec63[_0xf1a589]),_0x257bb4=(await _0x4a9026['getLatestBlockhash'](_0x22e7f3(0x195)))[_0x22e7f3(0x176)],_0x13214f=new Bundle([]);_0x17c67a['forEach'](_0x50dde1=>_0x13214f['addTransactions'](_0x50dde1)),_0x13214f['addTipTx'](_0x5cccc3,_0x289f8a,_0x36b067,_0x257bb4),console[_0x22e7f3(0x184)](_0x22e7f3(0x186),_0x13214f[_0x22e7f3(0x1a0)]['length']);try{const _0xf8e9bd=await _0x1dfe9d[_0x22e7f3(0x1a7)](_0x13214f);console[_0x22e7f3(0x184)](_0x22e7f3(0x169)+(Math[_0x22e7f3(0x1a3)](_0x596a4b/(_0x48f23f*_0x551229))+0x1)+':',_0x22e7f3(0x18b)+_0xf8e9bd);}catch(_0x53a12a){console[_0x22e7f3(0x16b)](_0x22e7f3(0x182),_0x53a12a);}_0x596a4b+_0x48f23f*_0x551229<_0x3dd015[_0x22e7f3(0x199)]&&(console[_0x22e7f3(0x184)](_0x22e7f3(0x17c)+DELAY+_0x22e7f3(0x163)),await sleep(DELAY));}}export default consoSPLT;