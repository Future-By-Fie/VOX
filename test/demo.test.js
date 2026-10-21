import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('standalone demo has required controls',()=>{
 for(const id of ['start','stop','threshold','scope','level','gate','peak','openPercent','frames','resetStats'])assert.match(html,new RegExp('id="'+id+'"'));
 assert.match(html,/getUserMedia/);
 assert.match(html,/getFloatTimeDomainData/);
});
test('mic UI does not claim speaker isolation',()=>{
 assert.match(html,/not speaker recognition|cannot recognize your voice/i);
 assert.match(html,/No audio is uploaded or saved/);
});
