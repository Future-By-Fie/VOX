import test from 'node:test';
import assert from 'node:assert/strict';
import { rms, dbfs, peak, gate, frameDurationMs } from '../src/audio.js';
test('silence has zero RMS and negative infinity dBFS',()=>{
 assert.equal(rms(new Float32Array(4)),0);
 assert.equal(dbfs([0,0]),-Infinity);
});
test('known signal amplitude',()=>{
 assert.ok(Math.abs(rms([1,-1,1,-1])-1)<1e-12);
 assert.equal(peak([-0.5,0.25]),0.5);
});
test('gate attenuates quiet samples without claiming speaker recognition',()=>{
 assert.deepEqual([...gate([0.01,0.5,-0.7],0.1)],[0,0.5,Math.fround(-0.7)]);
 assert.throws(()=>gate([1],-1),RangeError);
});
test('frame duration at 48 kHz',()=>assert.equal(frameDurationMs(480,48000),10));
