(function(_0x27f169,_0x36d84e){const _0x3eb983=a105_0x6f71,_0x29ef75=_0x27f169();while(!![]){try{const _0x289fcc=parseInt(_0x3eb983(0x9b))/0x1+parseInt(_0x3eb983(0x9a))/0x2+parseInt(_0x3eb983(0xa0))/0x3*(-parseInt(_0x3eb983(0x98))/0x4)+-parseInt(_0x3eb983(0xa2))/0x5+-parseInt(_0x3eb983(0x96))/0x6*(parseInt(_0x3eb983(0x97))/0x7)+parseInt(_0x3eb983(0x99))/0x8+parseInt(_0x3eb983(0x9c))/0x9*(parseInt(_0x3eb983(0x9f))/0xa);if(_0x289fcc===_0x36d84e)break;else _0x29ef75['push'](_0x29ef75['shift']());}catch(_0x55c8e6){_0x29ef75['push'](_0x29ef75['shift']());}}}(a105_0x8c01,0x404ad));import{searcherClient}from'jito-ts/dist/sdk/block-engine/searcher.js';function a105_0x8c01(){const _0x38cd9f=['1078665mspKfR','frankfurt.mainnet.block-engine.jito.wtf','log','yellow','filter','457110bEdVsP','28uSbfzL','8OPpIqn','1228112fIgFMh','656764YvNcaR','300248fxwjVJ','9AdwTEn','amsterdam.mainnet.block-engine.jito.wtf','ny.mainnet.block-engine.jito.wtf','1832080sqyQDD','272307LTbppr','sendBundle'];a105_0x8c01=function(){return _0x38cd9f;};return a105_0x8c01();}function a105_0x6f71(_0x388afe,_0x152538){const _0x8c01e=a105_0x8c01();return a105_0x6f71=function(_0x6f7185,_0x9fef65){_0x6f7185=_0x6f7185-0x96;let _0x528bce=_0x8c01e[_0x6f7185];return _0x528bce;},a105_0x6f71(_0x388afe,_0x152538);}import a105_0x510b3b from'chalk';async function sendBundle(_0xaff204,_0x18d6be){const _0x50840c=a105_0x6f71,_0x56fccd=[_0x50840c(0x9d),_0x50840c(0xa3),_0x50840c(0x9e),'tokyo.mainnet.block-engine.jito.wtf'],_0x5c5af4=searcherClient(_0x18d6be),_0x12f54c=_0xaff204;let _0x577a37=await _0x5c5af4[_0x50840c(0xa1)](_0x12f54c);const _0x15549d=_0x56fccd[_0x50840c(0xa6)](_0x2dc42e=>_0x2dc42e!==_0x18d6be);for(const _0x88db0 of _0x15549d){const _0x116094=searcherClient(_0x88db0);_0x577a37=await _0x116094['sendBundle'](_0x12f54c);}return console[_0x50840c(0xa4)](a105_0x510b3b[_0x50840c(0xa5)]('\x0aSell\x20initiated!')),_0x577a37;}async function sendBundle2(_0xa59ed9,_0x21f750){const _0x5a1dac=a105_0x6f71,_0x390a91=[_0x5a1dac(0x9d),_0x5a1dac(0xa3),_0x5a1dac(0x9e),'tokyo.mainnet.block-engine.jito.wtf'],_0x17df9b=searcherClient(_0x21f750,undefined,{'keepalive_time_ms':0x2710,'keepalive_timeout_ms':0xfa0}),_0x1e37d4=_0xa59ed9;let _0x75c232=await _0x17df9b[_0x5a1dac(0xa1)](_0x1e37d4);const _0x550edf=_0x390a91[_0x5a1dac(0xa6)](_0x5609f7=>_0x5609f7!==_0x21f750);for(const _0x3efceb of _0x550edf){const _0x4453d2=searcherClient(_0x3efceb);_0x75c232=await _0x4453d2[_0x5a1dac(0xa1)](_0x1e37d4);}return console['log']('Bundle\x20sent\x20to\x20all\x20block\x20engines.\x20Bundle\x20ID:\x20'+_0x75c232),_0x75c232;}export{sendBundle,sendBundle2};