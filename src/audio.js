/** Audio research utilities. NOT speaker isolation or a virtual microphone. */
export function rms(samples) {
  if (!samples || typeof samples.length !== 'number') throw new TypeError('Expected samples');
  if (!samples.length) return 0;
  let sum=0;
  for (const s of samples) { if (!Number.isFinite(s)) throw new RangeError('Non-finite sample'); sum+=s*s; }
  return Math.sqrt(sum/samples.length);
}
export function dbfs(samples) {
  const value=rms(samples);
  return value===0 ? -Infinity : 20*Math.log10(value);
}
export function peak(samples) {
  if (!samples || typeof samples.length !== 'number') throw new TypeError('Expected samples');
  let p=0;
  for (const s of samples) { if (!Number.isFinite(s)) throw new RangeError('Non-finite sample'); p=Math.max(p,Math.abs(s)); }
  return p;
}
/** Simple amplitude gate: a research baseline, not voice recognition. */
export function gate(samples, threshold=0.02) {
  if (!Number.isFinite(threshold) || threshold<0 || threshold>1) throw new RangeError('Invalid threshold');
  if (!samples || typeof samples.length !== 'number') throw new TypeError('Expected samples');
  const output=new Float32Array(samples.length);
  for (let i=0;i<samples.length;i++) {
    const value=samples[i];
    if (!Number.isFinite(value)) throw new RangeError('Non-finite sample');
    output[i]=Math.abs(value)>=threshold ? value : 0;
  }
  return output;
}
export function frameDurationMs(sampleCount, sampleRate) {
  if (!Number.isInteger(sampleCount) || sampleCount<0 || !Number.isFinite(sampleRate) || sampleRate<=0) throw new RangeError('Invalid audio frame');
  return sampleCount/sampleRate*1000;
}
