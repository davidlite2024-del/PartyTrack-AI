/** Client-side pose geometry used by the game judge. MediaPipe landmarks are normalized 0..1. */
export type Point={x:number;y:number;visibility?:number};
export const angle=(a:Point,b:Point,c:Point)=>{const ab={x:a.x-b.x,y:a.y-b.y},cb={x:c.x-b.x,y:c.y-b.y};return Math.round(Math.acos(Math.max(-1,Math.min(1,(ab.x*cb.x+ab.y*cb.y)/(Math.hypot(ab.x,ab.y)*Math.hypot(cb.x,cb.y)||1))))*180/Math.PI)};
export const visible=(points:Point[])=>points.length>0&&points.every(p=>(p.visibility??1)>.55);
export const squatState=(knee:Point,hip:Point,ankle:Point,previous:'up'|'down'='up')=>{const a=angle(hip,knee,ankle);return {state:a<105?'down':'up' as 'up'|'down',rep:previous==='down'&&a>155};};
export const tPose=(shoulder:Point,elbow:Point,wrist:Point)=>angle(shoulder,elbow,wrist)>155;
export const balance=(hip:Point,knee:Point,ankle:Point)=>angle(hip,knee,ankle)>155;
