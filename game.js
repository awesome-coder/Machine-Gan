/* DEAD//SPLIT - bundled with esbuild. Original source lives in /src. */
(()=>{var oh=0,Tl=1,lh=2;var wl=1,ch=2,Ln=3,Wn=0,Wt=1,Xt=2,Jn=0,Xn=1,Qe=2,Al=3,Rl=4,hh=5,ci=100,uh=101,dh=102,fh=103,ph=104,mh=200,gh=201,xh=202,_h=203,jr=204,ea=205,yh=206,vh=207,Mh=208,Sh=209,bh=210,Eh=211,Th=212,wh=213,Ah=214,Ta=0,wa=1,Aa=2,Ti=3,Ra=4,Ca=5,Ia=6,Pa=7,Cl=0,Rh=1,Ch=2,Kn=0,Ih=1,Ph=2,Lh=3,La=4,Dh=5,Uh=6,Nh=7;var Il=300,Ii=301,Pi=302,Da=303,Ua=304,hr=306,qn=1e3,li=1001,ta=1002,Yt=1003,Fh=1004;var ur=1005;var jt=1006,Na=1007;var mi=1008;var Sn=1009,Pl=1010,Ll=1011,xs=1012,Fa=1013,gi=1014,bn=1015,_s=1016,Ba=1017,Oa=1018,ys=1020,Dl=35902,Ul=35899,Nl=1021,Fl=1022,un=1023,rs=1026,vs=1027,Ha=1028,za=1029,Bl=1030,ka=1031;var Ga=1033,dr=33776,fr=33777,pr=33778,mr=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,$a=37496,Ja=37808,Ka=37809,Qa=37810,ja=37811,eo=37812,to=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,ho=36492,uo=36494,fo=36495,po=36283,mo=36284,go=36285,xo=36286;var ks=2300,na=2301,Qr=2302,gl=2400,xl=2401,_l=2402;var Bh=3200,Oh=3201;var Ol=0,Hh=1,Qn="",je="srgb",wi="srgb-linear",Gs="linear",dt="srgb";var Ei=7680;var yl=519,zh=512,kh=513,Gh=514,Hl=515,Vh=516,Wh=517,Xh=518,qh=519,ia=35044,rn=35048;var zl="300 es",xn=2e3,Vs=2001;var Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,is=Math.PI/180,as=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function kl(s,e){return(s%e+e)%e}function ju(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ed(s,e,t){return s!==e?(t-s)/(e-s):0}function zs(s,e,t){return(1-t)*s+t*e}function td(s,e,t,n){return zs(s,e,1-Math.exp(-t*n))}function nd(s,e=1){return e-Math.abs(kl(s,e*2)-e)}function id(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ad(s,e){return s+Math.random()*(e-s)}function od(s){return s*(.5-Math.random())}function ld(s){s!==void 0&&(Rc=s);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cd(s){return s*is}function hd(s){return s*as}function ud(s){return(s&s-1)===0&&s!==0}function dd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pd(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var gr={DEG2RAD:is,RAD2DEG:as,generateUUID:Gn,clamp:Ke,euclideanModulo:kl,mapLinear:ju,inverseLerp:ed,lerp:zs,damp:td,pingpong:nd,smoothstep:id,smootherstep:sd,randInt:rd,randFloat:ad,randFloatSpread:od,seededRandom:ld,degToRad:cd,radToDeg:hd,isPowerOfTwo:ud,ceilPowerOfTwo:dd,floorPowerOfTwo:fd,setQuaternionFromProperEuler:pd,normalize:ht,denormalize:gn},Be=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*x,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let R=Math.sqrt(T),A=Math.atan2(R,d*b);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let S=o*b;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,u=u*m+x*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new L,Cc=new _n,Ve=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],b=i[1],T=i[4],S=i[7],R=i[2],A=i[5],P=i[8];return r[0]=a*x+o*b+l*R,r[3]=a*m+o*T+l*A,r[6]=a*d+o*S+l*P,r[1]=c*x+h*b+u*R,r[4]=c*m+h*T+u*A,r[7]=c*d+h*S+u*P,r[2]=f*x+p*b+g*R,r[5]=f*m+p*T+g*A,r[8]=f*d+p*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new Ve;function Gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yh(){let s=Ws("canvas");return s.style.display="block",s}var Ic={};function os(s){s in Ic||(Ic[s]=!0,console.warn(s))}function Zh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){let s={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Gs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wi]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}var tt=md();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zi,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Ws("canvas")),zi.width=e.width,zi.height=e.height;let i=zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gd=0,ls=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(qo(i[a].image)):r.push(qo(i[a]))}else r=qo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function qo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,Yo=new L,Vt=class s extends Yn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=li,i=li,r=jt,a=mi,o=un,l=Sn,c=s.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Gn(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Il;Vt.DEFAULT_ANISOTROPY=1;var ut=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(p+1)/2,R=(d+1)/2,A=(h+f)/4,P=(u+x)/4,N=(g+m)/4;return T>S&&T>R?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=A/n,r=P/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=N/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=P/r,i=N/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ra=class extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Vt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends ra{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var aa=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Er.subVectors(this.max,Cs),ki.subVectors(e.a,Cs),Gi.subVectors(e.b,Cs),Vi.subVectors(e.c,Cs),ni.subVectors(Gi,ki),ii.subVectors(Vi,Gi),vi.subVectors(ki,Vi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!Zo(t,ki,Gi,Vi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,ki,Gi,Vi,Er))?!1:(Tr.crossVectors(ni,ii),t=[Tr.x,Tr.y,Tr.z],Zo(t,ki,Gi,Vi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,br=new Cn,ki=new L,Gi=new L,Vi=new L,ni=new L,ii=new L,vi=new L,Cs=new L,Er=new L,Tr=new L,Mi=new L;function Zo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);let o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _d=new Cn,Is=new L,$o=new L,In=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add($o)),this.expandByPoint(Is.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},On=new L,Jo=new L,wr=new L,si=new L,Ko=new L,Ar=new L,Qo=new L,Ai=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=si.dot(this.direction),l=-si.dot(wr),c=si.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Jo).addScaledVector(wr,f),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);let n=On.dot(this.direction),i=On.dot(On)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,r){Ko.subVectors(t,e),Ar.subVectors(n,e),Qo.crossVectors(Ko,Ar);let a=this.direction.dot(Qo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);let l=o*this.direction.dot(Ar.crossVectors(si,Ar));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(si));if(c<0||l+c>a)return null;let h=-o*si.dot(Qo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,f,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,p,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yd,e,vd)}lookAt(e,t,n){let i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ri.crossVectors(n,Kt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ri.crossVectors(n,Kt)),ri.normalize(),Rr.crossVectors(Kt,ri),i[0]=ri.x,i[4]=Rr.x,i[8]=Kt.x,i[1]=ri.y,i[5]=Rr.y,i[9]=Kt.y,i[2]=ri.z,i[6]=Rr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],b=n[3],T=n[7],S=n[11],R=n[15],A=i[0],P=i[4],N=i[8],y=i[12],M=i[1],D=i[5],O=i[9],X=i[13],w=i[2],H=i[6],W=i[10],ee=i[14],k=i[3],Z=i[7],le=i[11],ve=i[15];return r[0]=a*A+o*M+l*w+c*k,r[4]=a*P+o*D+l*H+c*Z,r[8]=a*N+o*O+l*W+c*le,r[12]=a*y+o*X+l*ee+c*ve,r[1]=h*A+u*M+f*w+p*k,r[5]=h*P+u*D+f*H+p*Z,r[9]=h*N+u*O+f*W+p*le,r[13]=h*y+u*X+f*ee+p*ve,r[2]=g*A+x*M+m*w+d*k,r[6]=g*P+x*D+m*H+d*Z,r[10]=g*N+x*O+m*W+d*le,r[14]=g*y+x*X+m*ee+d*ve,r[3]=b*A+T*M+S*w+R*k,r[7]=b*P+T*D+S*H+R*Z,r[11]=b*N+T*O+S*W+R*le,r[15]=b*y+T*X+S*ee+R*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,T=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*x*c-g*u*c+g*o*p-a*x*p-h*o*d+a*u*d,R=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,A=t*b+n*T+i*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=b*P,e[1]=(x*f*r-u*m*r-x*i*p+n*m*p+u*i*d-n*f*d)*P,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*P,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*P,e[4]=T*P,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*d+t*f*d)*P,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*d-t*l*d)*P,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*P,e[8]=S*P,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*P,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*d+t*o*d)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=R*P,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*P,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,x=a*h,m=a*u,d=o*u,b=l*c,T=l*h,S=l*u,R=n.x,A=n.y,P=n.z;return i[0]=(1-(x+d))*R,i[1]=(p+S)*R,i[2]=(g-T)*R,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(f+d))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+T)*P,i[9]=(m-b)*P,i[10]=(1-(f+x))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Wi.set(i[0],i[1],i[2]).length(),a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);let c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=xn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Vs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=xn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===xn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Vs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wi=new L,pn=new at,yd=new L(0,0,0),vd=new L(1,1,1),ri=new L,Rr=new L,Kt=new L,Dc=new at,Uc=new _n,en=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Md=0,Nc=new L,Xi=new _n,Hn=new at,Cr=new L,Ps=new L,Sd=new L,bd=new _n,Fc=new L(1,0,0),Bc=new L(0,1,0),Oc=new L(0,0,1),Hc={type:"added"},Ed={type:"removed"},qi={type:"childadded",child:null},jo={type:"childremoved",child:null},wt=class s extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new en,n=new _n,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ps,Cr,this.up):Hn.lookAt(Cr,Ps,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new L,zn=new L,el=new L,kn=new L,Yi=new L,Zi=new L,zc=new L,tl=new L,nl=new L,il=new L,sl=new ut,rl=new ut,al=new ut,An=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),zn.subVectors(n,t),el.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(zn),l=mn.dot(el),c=zn.dot(zn),h=zn.dot(el),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return sl.setScalar(0),rl.setScalar(0),al.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),al.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sl,r.x),a.addScaledVector(rl,r.y),a.addScaledVector(al,r.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),zn.subVectors(e,t),mn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Yi.subVectors(i,n),Zi.subVectors(r,n),tl.subVectors(e,n);let l=Yi.dot(tl),c=Zi.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,i);let h=Yi.dot(nl),u=Zi.dot(nl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yi,a);il.subVectors(e,r);let p=Yi.dot(il),g=Zi.dot(il);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zc.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(zc,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function ol(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=kl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ol(a,r,e+1/3),this.g=ol(a,r,e),this.b=ol(a,r,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return tt.workingToColorSpace(Ot.copy(this),e),Math.round(Ke(Ot.r*255,0,255))*65536+Math.round(Ke(Ot.g*255,0,255))*256+Math.round(Ke(Ot.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ot.copy(this),t);let n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=je){tt.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,i=Ot.b;return e!==je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ir);let n=zs(ai.h,Ir.h,t),i=zs(ai.s,Ir.s,t),r=zs(ai.l,Ir.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Pe;Pe.NAMES=$h;var Td=0,yn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Xn,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=ea,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ue=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new L,Pr=new Be,wd=0,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}};var qs=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ad=0,cn=new at,ll=new wt,$i=new L,Qt=new Cn,Ls=new Cn,Ut=new L,nt=class s extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Qt.min,Ls.min),Qt.expandByPoint(Ut),Ut.addVectors(Qt.max,Ls.max),Qt.expandByPoint(Ut)):(Qt.expandByPoint(Ls.min),Qt.expandByPoint(Ls.max))}Qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Ut.add($i)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new L,l[N]=new L;let c=new L,h=new L,u=new L,f=new Be,p=new Be,g=new Be,x=new L,m=new L;function d(N,y,M){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[N].add(x),o[y].add(x),o[M].add(x),l[N].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,y=b.length;N<y;++N){let M=b[N],D=M.start,O=M.count;for(let X=D,w=D+O;X<w;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let T=new L,S=new L,R=new L,A=new L;function P(N){R.fromBufferAttribute(i,N),A.copy(R);let y=o[N];T.copy(y),T.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(A,y);let D=S.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,y=b.length;N<y;++N){let M=b[N],D=M.start,O=M.count;for(let X=D,w=D+O;X<w;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=new at,Si=new Ai,Lr=new In,Gc=new L,Dr=new L,Ur=new L,Nr=new L,cl=new L,Fr=new L,Vc=new L,Br=new L,de=class extends wt{constructor(e=new nt,t=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,e),a?Fr.addScaledVector(cl,h):Fr.addScaledVector(cl.sub(t),h))}t.add(Fr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(Lr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Lr,Gc)===null||Si.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(kc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=T;S<R;S+=3){let A=o.getX(S),P=o.getX(S+1),N=o.getX(S+2);i=Or(this,d,e,n,c,h,u,A,P,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);i=Or(this,a,e,n,c,h,u,b,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,R=T;S<R;S+=3){let A=S,P=S+1,N=S+2;i=Or(this,d,e,n,c,h,u,A,P,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let b=m,T=m+1,S=m+2;i=Or(this,a,e,n,c,h,u,b,T,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Rd(s,e,t,n,i,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Wn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function Or(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Dr),s.getVertexPosition(l,Ur),s.getVertexPosition(c,Nr);let h=Rd(s,e,t,n,Dr,Ur,Nr,Vc);if(h){let u=new L;An.getBarycoord(Vc,Dr,Ur,Nr,u),i&&(h.uv=An.getInterpolatedAttribute(i,o,l,c,u,new Be)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,l,c,u,new Be)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};An.getNormal(Dr,Ur,Nr,f.normal),h.face=f,h.barycoord=u}return h}var $e=class s extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,m,d,b,T,S,R,A,P,N,y){let M=S/P,D=R/N,O=S/2,X=R/2,w=A/2,H=P+1,W=N+1,ee=0,k=0,Z=new L;for(let le=0;le<W;le++){let ve=le*D-X;for(let Ae=0;Ae<H;Ae++){let rt=Ae*M-O;Z[x]=rt*b,Z[m]=ve*T,Z[d]=w,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[d]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Ae/P),u.push(1-le/N),ee+=1}}for(let le=0;le<N;le++)for(let ve=0;ve<P;ve++){let Ae=f+ve+H*le,rt=f+ve+H*(le+1),pt=f+(ve+1)+H*(le+1),et=f+(ve+1)+H*le;l.push(Ae,rt,et),l.push(rt,pt,et),k+=6}o.addGroup(p,k,y),p+=k,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Li(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){let e={};for(let t=0;t<s.length;t++){let n=Li(s[t]);for(let i in n)e[i]=n[i]}return e}function Cd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vl(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Jh={clone:Li,merge:zt},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Zs=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new L,Wc=new Be,Xc=new Be,Nt=class extends Zs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=-90,Ki=1,oa=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nt(Ji,Ki,e,t);i.layers=this.layers,this.add(i);let r=new Nt(Ji,Ki,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Ji,Ki,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Ji,Ki,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Ji,Ki,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$s=class extends Vt{constructor(e=[],t=Ii,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},la=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $s(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $e(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Jn});r.uniforms.tEquirect.value=t;let a=new de(i,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=jt),new oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Ze=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ld={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Js=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ks=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ia,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new L,us=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zn=class extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi,Ds=new L,ji=new L,es=new L,ts=new Be,Us=new Be,Kh=new at,Hr=new L,Ns=new L,zr=new L,qc=new Be,hl=new Be,Yc=new Be,hi=class extends wt{constructor(e=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qs(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new us(n,3,0,!1)),Qi.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-es.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;kr(Hr.set(-.5,-.5,0),es,a,ji,i,r),kr(Ns.set(.5,-.5,0),es,a,ji,i,r),kr(zr.set(.5,.5,0),es,a,ji,i,r),qc.set(0,0),hl.set(1,0),Yc.set(1,1);let o=e.ray.intersectTriangle(Hr,Ns,zr,!1,Ds);if(o===null&&(kr(Ns.set(-.5,.5,0),es,a,ji,i,r),hl.set(0,1),o=e.ray.intersectTriangle(Hr,zr,Ns,!1,Ds),o===null))return;let l=e.ray.origin.distanceTo(Ds);l<e.near||l>e.far||t.push({distance:l,point:Ds.clone(),uv:An.getInterpolation(Ds,Hr,Ns,zr,qc,hl,Yc,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function kr(s,e,t,n,i,r){ts.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Us.x=r*ts.x-i*ts.y,Us.y=i*ts.x+r*ts.y):Us.copy(ts),s.copy(e),s.x+=Us.x,s.y+=Us.y,s.applyMatrix4(Kh)}var ca=class extends Vt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Yt,h=Yt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ds=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ns=new at,Zc=new at,Gr=[],$c=new Cn,Dd=new at,Fs=new de,Bs=new In,fs=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),$c.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union($c)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Bs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),Zc.multiplyMatrices(n,ns),Fs.matrixWorld=Zc,Fs.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){let l=Gr[a];l.instanceId=r,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(i*this.count),i,this.count,Ha,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ul=new L,Ud=new L,Nd=new Ve,hn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ul.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ul),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nd.getNormalMatrix(e),i=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new In,Fd=new Be(.5,.5),Vr=new L,ps=class{constructor(e=new hn,t=new hn,n=new hn,i=new hn,r=new hn,a=new hn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],b=r[12],T=r[13],S=r[14],R=r[15];if(i[0].setComponents(c-a,p-h,d-g,R-b).normalize(),i[1].setComponents(c+a,p+h,d+g,R+b).normalize(),i[2].setComponents(c+o,p+u,d+x,R+T).normalize(),i[3].setComponents(c-o,p-u,d-x,R-T).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,p-f,d-m,R-S).normalize();else if(i[4].setComponents(c-l,p-f,d-m,R-S).normalize(),t===xn)i[5].setComponents(c+l,p+f,d+m,R+S).normalize();else if(t===Vs)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);let t=Fd.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Vr.x=i.normal.x>0?e.max.x:e.min.x,Vr.y=i.normal.y>0?e.max.y:e.min.y,Vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tn=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new L,ua=new L,Jc=new at,Os=new Ai,Wr=new In,dl=new L,Kc=new L,vn=class extends wt{constructor(e=new nt,t=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ha.fromBufferAttribute(t,i-1),ua.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Jc.copy(i).invert(),Os.copy(e.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let d=h.getX(x),b=h.getX(x+1),T=Xr(this,e,Os,l,d,b,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=Xr(this,e,Os,l,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let d=Xr(this,e,Os,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Xr(this,e,Os,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xr(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(ha.fromBufferAttribute(o,i),ua.fromBufferAttribute(o,r),t.distanceSqToSegment(ha,ua,dl,Kc)>n)return;dl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(dl);if(!(c<e.near||c>e.far))return{distance:c,point:Kc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Qc=new L,jc=new L,js=class extends vn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qc.fromBufferAttribute(t,i),jc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(jc);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eh=new at,vl=new Ai,qr=new In,Yr=new L,ui=class extends wt{constructor(e=new nt,t=new Ri){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;eh.copy(i).invert(),vl.copy(e.ray).applyMatrix4(eh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);Yr.fromBufferAttribute(u,m),th(Yr,m,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Yr.fromBufferAttribute(u,g),th(Yr,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function th(s,e,t,n,i,r,a){let o=vl.distanceSqToPoint(s);if(o<t){let l=new L;vl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var At=class extends Vt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},er=class extends Vt{constructor(e,t,n=gi,i,r,a,o=Yt,l=Yt,c,h=rs,u=1){if(h!==rs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tr=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nr=class s extends nt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,p=2*u+f,g=n*2+r,x=i+1,m=new L,d=new L;for(let b=0;b<=g;b++){let T=0,S=0,R=0,A=0;if(b<=n){let y=b/n,M=y*Math.PI/2;S=-h-e*Math.cos(M),R=e*Math.sin(M),A=-e*Math.cos(M),T=y*u}else if(b<=n+r){let y=(b-n)/r;S=-h+y*t,R=e,A=0,T=u+y*f}else{let y=(b-n-r)/n,M=y*Math.PI/2;S=h+e*Math.sin(M),R=e*Math.cos(M),A=e*Math.sin(M),T=u+f+y*u}let P=Math.max(0,Math.min(1,T/p)),N=0;b===0?N=.5/i:b===g&&(N=-.5/i);for(let y=0;y<=i;y++){let M=y/i,D=M*Math.PI*2,O=Math.sin(D),X=Math.cos(D);d.x=-R*X,d.y=S,d.z=R*O,o.push(d.x,d.y,d.z),m.set(-R*X,A,R*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+N,P)}if(b>0){let y=(b-1)*x;for(let M=0;M<i;M++){let D=y+M,O=y+M+1,X=b*x+M,w=b*x+M+1;a.push(D,O,X),a.push(O,w,X)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ir=class s extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class s extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(p,2));function b(){let S=new L,R=new L,A=0,P=(t-e)/n;for(let N=0;N<=r;N++){let y=[],M=N/r,D=M*(t-e)+e;for(let O=0;O<=i;O++){let X=O/i,w=X*l+o,H=Math.sin(w),W=Math.cos(w);R.x=D*H,R.y=-M*n+m,R.z=D*W,u.push(R.x,R.y,R.z),S.set(H,P,W).normalize(),f.push(S.x,S.y,S.z),p.push(X,1-M),y.push(g++)}x.push(y)}for(let N=0;N<i;N++)for(let y=0;y<r;y++){let M=x[y][N],D=x[y+1][N],O=x[y+1][N+1],X=x[y][N+1];(e>0||y!==0)&&(h.push(M,D,X),A+=3),(t>0||y!==r-1)&&(h.push(D,O,X),A+=3)}c.addGroup(d,A,0),d+=A}function T(S){let R=g,A=new Be,P=new L,N=0,y=S===!0?e:t,M=S===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let D=g;for(let O=0;O<=i;O++){let w=O/i*l+o,H=Math.cos(w),W=Math.sin(w);P.x=y*W,P.y=m*M,P.z=y*H,u.push(P.x,P.y,P.z),f.push(0,M,0),A.x=H*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){let X=R+O,w=D+O;S===!0?h.push(w,w+1,X):h.push(w+1,w,X),N+=3}c.addGroup(d,N,S===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},di=class s extends Mn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Zr=new L,$r=new L,fl=new L,Jr=new An,sr=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(is*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:d}=Jr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),Jr.getNormal(fl),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let T=(b+1)%3,S=u[b],R=u[T],A=Jr[h[b]],P=Jr[h[T]],N=`${S}_${R}`,y=`${R}_${S}`;y in f&&f[y]?(fl.dot(f[y].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(P.x,P.y,P.z)),f[y]=null):N in f||(f[N]={index0:c[b],index1:c[T],normal:fl.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];Zr.fromBufferAttribute(o,x),$r.fromBufferAttribute(o,m),p.push(Zr.x,Zr.y,Zr.z),p.push($r.x,$r.y,$r.z)}this.setAttribute("position",new st(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Rt=class s extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let b=d*f-a;for(let T=0;T<c;T++){let S=T*u-r;g.push(S,-b,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let T=b+c*d,S=b+c*(d+1),R=b+1+c*(d+1),A=b+1+c*d;p.push(T,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},rr=class s extends nt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/i,p=new L,g=new Be;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let d=0;d<n;d++){let b=d+m,T=b,S=b+n+1,R=b+n+2,A=b+1;o.push(T,S,A),o.push(S,R,A)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $n=class s extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let b=[],T=d/n,S=0;d===0&&a===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-T),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let T=h[d][b+1],S=h[d][b],R=h[d+1][b],A=h[d+1][b+1];(d!==0||a>0)&&p.push(T,S,A),(d!==n-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nn=class s extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let x=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,b=(i+1)*p+g;a.push(x,m,b),a.push(m,d,b)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bt=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var da=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fa=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ci=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pa=class extends Ci{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xl:r=e,o=2*t-n;break;case _l:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xl:a=e,l=2*n-t;break;case _l:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,b=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let R=0;R!==o;++R)r[R]=d*a[h+R]+b*a[c+R]+T*a[l+R]+S*a[u+R];return r}},ma=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ga=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Bd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=na;var fi=class extends sn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ks;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends sn{constructor(e,t,n,i){super(e,t,n,i)}};xa.prototype.ValueTypeName="color";var _a=class extends sn{constructor(e,t,n,i){super(e,t,n,i)}};_a.prototype.ValueTypeName="number";var ya=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},ar=class extends sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends sn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ks;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends sn{constructor(e,t,n,i){super(e,t,n,i)}};va.prototype.ValueTypeName="vector";var Ma=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Qh=new Ma,Sa=class{constructor(e){this.manager=e!==void 0?e:Qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},or=class extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},pl=new at,nh=new L,ih=new L,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sh=new at,Hs=new L,ml=new L,Ml=class extends ba{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),ml.copy(n.position),ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ml),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,n.coordinateSystem,n.reversedDepth)}},Pn=class extends ms{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lr=class extends Zs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sl=class extends ba{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ea=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Wl="\\[\\]\\.:\\/",Od=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",Hd="[^"+Wl.replace("\\.","")+"]",zd=/((?:WC+[\/:])*)/.source.replace("WC",Xl),kd=/(WCOD+)?/.source.replace("WCOD",Hd),Gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),Vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Wd=new RegExp("^"+zd+kd+Gd+Vd+"$"),Xd=["material","materials","bones","map"],bl=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Od,"")}static parseTrackName(e){let t=Wd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Xd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=bl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xg=new Float32Array(1);var rh=new at,cr=class{constructor(e,t,n=0,i=1/0){this.ray=new Ai(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rh),this}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(ah),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)El(e[i],this,n,t);return n.sort(ah),n}};function ah(s,e){return s.distance-e.distance}function El(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)El(r[a],e,t,!0)}}function ql(s,e,t,n){let i=qd(n);switch(t){case Nl:return s*e;case Ha:return s*e/i.components*i.byteLength;case za:return s*e/i.components*i.byteLength;case Bl:return s*e*2/i.components*i.byteLength;case ka:return s*e*2/i.components*i.byteLength;case Fl:return s*e*3/i.components*i.byteLength;case un:return s*e*4/i.components*i.byteLength;case Ga:return s*e*4/i.components*i.byteLength;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(s,16)*Math.max(e,8)/4;case Va:case Xa:return Math.max(s,8)*Math.max(e,8)/2;case Ya:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case so:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ho:case uo:case fo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case go:case xo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qd(s){switch(s){case Sn:case Pl:return{byteLength:1,components:1};case xs:case Ll:case _s:return{byteLength:2,components:1};case Ba:case Oa:return{byteLength:2,components:4};case gi:case Fa:case bn:return{byteLength:4,components:1};case Dl:case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Su(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kd(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Qd,alphahash_pars_fragment:jd,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:xf,color_fragment:_f,color_pars_fragment:yf,color_pars_vertex:vf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:If,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Bf,fog_fragment:Of,fog_pars_fragment:Hf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:kf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:$f,lights_physical_fragment:Jf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Qf,lights_fragment_maps:jf,lights_fragment_end:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:xp,normal_pars_fragment:_p,normal_pars_vertex:yp,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Tp,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Bp,skinbase_vertex:Op,skinning_pars_vertex:Hp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Gp,specularmap_pars_fragment:Vp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:$p,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:Qp,background_frag:jp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:am,distanceRGBA_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:xm,meshnormal_vert:_m,meshnormal_frag:ym,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:bm,meshtoon_vert:Em,meshtoon_frag:Tm,points_vert:wm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Im,sprite_frag:Pm},ue={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Dn={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Dn.physical={uniforms:zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var _o={r:0,b:0,g:0},Di=new en,Lm=new at;function Dm(s,e,t,n,i,r,a){let o=new Pe(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1,R=g(T);R===null?d(o,l):R&&R.isColor&&(d(R,1),S=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===hr)?(h===void 0&&(h=new de(new $e(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Li(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Di.copy(S.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Di)),h.material.toneMapped=tt.getTransfer(R.colorSpace)!==dt,(u!==R||f!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new de(new Rt(2,2),new Ht({name:"BackgroundMaterial",uniforms:Li(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(R.colorSpace)!==dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,p=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,S){T.getRGB(_o,Vl(s)),n.buffers.color.setClear(_o.r,_o.g,_o.b,S,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:x,addToRenderList:m,dispose:b}}function Um(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(M,D,O,X,w){let H=!1,W=u(X,O,D);r!==W&&(r=W,c(r.object)),H=p(M,X,O,w),H&&g(M,X,O,w),w!==null&&e.update(w,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(M,D,O,X),w!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,O){let X=O.wireframe===!0,w=n[M.id];w===void 0&&(w={},n[M.id]=w);let H=w[D.id];H===void 0&&(H={},w[D.id]=H);let W=H[X];return W===void 0&&(W=f(l()),H[X]=W),W}function f(M){let D=[],O=[],X=[];for(let w=0;w<t;w++)D[w]=0,O[w]=0,X[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,D,O,X){let w=r.attributes,H=D.attributes,W=0,ee=O.getAttributes();for(let k in ee)if(ee[k].location>=0){let le=w[k],ve=H[k];if(ve===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function g(M,D,O,X){let w={},H=D.attributes,W=0,ee=O.getAttributes();for(let k in ee)if(ee[k].location>=0){let le=H[k];le===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));let ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),w[k]=ve,W++}r.attributes=w,r.attributesNum=W,r.index=X}function x(){let M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){let O=r.newAttributes,X=r.enabledAttributes,w=r.attributeDivisors;O[M]=1,X[M]===0&&(s.enableVertexAttribArray(M),X[M]=1),w[M]!==D&&(s.vertexAttribDivisor(M,D),w[M]=D)}function b(){let M=r.newAttributes,D=r.enabledAttributes;for(let O=0,X=D.length;O<X;O++)D[O]!==M[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function T(M,D,O,X,w,H,W){W===!0?s.vertexAttribIPointer(M,D,O,w,H):s.vertexAttribPointer(M,D,O,X,w,H)}function S(M,D,O,X){x();let w=X.attributes,H=O.getAttributes(),W=D.defaultAttributeValues;for(let ee in H){let k=H[ee];if(k.location>=0){let Z=w[ee];if(Z===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let le=Z.normalized,ve=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let rt=Ae.buffer,pt=Ae.type,et=Ae.bytesPerElement,$=pt===s.INT||pt===s.UNSIGNED_INT||Z.gpuType===Fa;if(Z.isInterleavedBufferAttribute){let ne=Z.data,Me=ne.stride,Fe=Z.offset;if(ne.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)d(k.location+Te,ne.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Te=0;Te<k.locationSize;Te++)T(k.location+Te,ve/k.locationSize,pt,le,Me*et,(Fe+ve/k.locationSize*Te)*et,$)}else{if(Z.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)d(k.location+ne,Z.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ne=0;ne<k.locationSize;ne++)T(k.location+ne,ve/k.locationSize,pt,le,ve*et,ve/k.locationSize*ne*et,$)}}else if(W!==void 0){let le=W[ee];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(k.location,le);break;case 3:s.vertexAttrib3fv(k.location,le);break;case 4:s.vertexAttrib4fv(k.location,le);break;default:s.vertexAttrib1fv(k.location,le)}}}}b()}function R(){N();for(let M in n){let D=n[M];for(let O in D){let X=D[O];for(let w in X)h(X[w].object),delete X[w];delete D[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let O in D){let X=D[O];for(let w in X)h(X[w].object),delete X[w];delete D[O]}delete n[M.id]}function P(M){for(let D in n){let O=n[D];if(O[M.id]===void 0)continue;let X=O[M.id];for(let w in X)h(X[w].object),delete X[w];delete O[M.id]}}function N(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Nm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==un&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Sn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!N)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Bm(s){let e=this,t=null,n=0,i=!1,r=!1,a=new hn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,T=b*4,S=d.clippingState||null;l.value=S,S=h(g,f,T,p);for(let R=0;R!==T;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==x;++T,S+=4)a.copy(u[T]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Om(s){let e=new WeakMap;function t(a,o){return o===Da?a.mapping=Ii:o===Ua&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Da||o===Ua)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new la(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ss=4,jh=[.125,.215,.35,.446,.526,.582],Fi=20,Yl=new lr,eu=new Pe,Zl=null,$l=0,Jl=0,Kl=!1,Ni=(1+Math.sqrt(5))/2,Ms=1/Ni,tu=[new L(-Ni,Ms,0),new L(Ni,Ms,0),new L(-Ms,0,Ni),new L(Ms,0,Ni),new L(0,Ni,-Ms),new L(0,Ni,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Hm=new L,Mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Hm}=r;Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,$l,Jl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:_s,format:un,colorSpace:wi,depthBuffer:!1},i=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=km(r,e,t)}return i}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,n,i,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(eu),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Ue({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),m=new de(new $e,x),d=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,d=!0):(x.color.copy(eu),d=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let R=this._cubeSize;yo(i,S*R,T>2?R:0,R,R),u.setRenderTarget(i),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ii||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tu[(i-r-1)%tu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let d=[],b=0;for(let P=0;P<Fi;++P){let N=P/x,y=Math.exp(-N*N/2);d.push(y),P===0?b+=y:P<m&&(b+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;let S=this._sizeLods[i],R=3*S*(i>T-Ss?i-T+Ss:0),A=4*(this._cubeSize-S);yo(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(u,Yl)}};function zm(s){let e=[],t=[],n=[],i=s,r=s-Ss+1+jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ss?l=jh[a-s+Ss-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),T=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,N=A>2?0:-1,y=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];b.set(y,x*g*A),T.set(f,m*g*A);let M=[A,A,A,A,A,A];S.set(M,d*g*A)}let R=new nt;R.setAttribute("position",new ot(b,x)),R.setAttribute("uv",new ot(T,m)),R.setAttribute("faceIndex",new ot(S,d)),e.push(R),i>Ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(s,e,t){let n=new Rn(s,e,t);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function km(s,e,t){let n=new Float32Array(Fi),i=new L(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function iu(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function su(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Da||l===Ua,h=l===Ii||l===Pi;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Mo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Mo(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vm(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wm(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let b=p.array;x=p.version;for(let T=0,S=b.length;T<S;T+=3){let R=b[T+0],A=b[T+1],P=b[T+2];f.push(R,A,A,P,P,R)}}else if(g!==void 0){let b=g.array;x=g.version;for(let T=0,S=b.length/3-1;T<S;T+=3){let R=T+0,A=T+1,P=T+2;f.push(R,A,A,P,P,R)}}else return;let m=new(Gl(f)?Ys:qs)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xm(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qm(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ym(s,e,t){let n=new WeakMap,i=new ut;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*R*4*u),P=new Xs(A,S,R,u);P.type=bn,P.needsUpdate=!0;let N=T*4;for(let M=0;M<u;M++){let D=m[M],O=d[M],X=b[M],w=S*R*4*M;for(let H=0;H<D.count;H++){let W=H*N;p===!0&&(i.fromBufferAttribute(D,H),A[w+W+0]=i.x,A[w+W+1]=i.y,A[w+W+2]=i.z,A[w+W+3]=0),g===!0&&(i.fromBufferAttribute(O,H),A[w+W+4]=i.x,A[w+W+5]=i.y,A[w+W+6]=i.z,A[w+W+7]=0),x===!0&&(i.fromBufferAttribute(X,H),A[w+W+8]=i.x,A[w+W+9]=i.y,A[w+W+10]=i.z,A[w+W+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new Be(S,R)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Zm(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var bu=new Vt,ru=new er(1,1),Eu=new Xs,Tu=new aa,wu=new $s,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function Es(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=au[i];if(r===void 0&&(r=new Float32Array(i),au[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bo(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $m(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Km(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Qm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function jm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),Dt(t,n)}}function e0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;cu.set(n),s.uniformMatrix3fv(this.addr,!1,cu),Dt(t,n)}}function t0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;lu.set(n),s.uniformMatrix4fv(this.addr,!1,lu),Dt(t,n)}}function n0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function i0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function r0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function a0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function l0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function c0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function h0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ru.compareFunction=Hl,r=ru):r=bu,t.setTexture2D(e||r,i)}function u0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tu,i)}function d0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wu,i)}function f0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eu,i)}function p0(s){switch(s){case 5126:return $m;case 35664:return Jm;case 35665:return Km;case 35666:return Qm;case 35674:return jm;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(s,e){s.uniform1fv(this.addr,e)}function g0(s,e){let t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function x0(s,e){let t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function _0(s,e){let t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function y0(s,e){let t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function v0(s,e){let t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function M0(s,e){let t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function S0(s,e){s.uniform1iv(this.addr,e)}function b0(s,e){s.uniform2iv(this.addr,e)}function E0(s,e){s.uniform3iv(this.addr,e)}function T0(s,e){s.uniform4iv(this.addr,e)}function w0(s,e){s.uniform1uiv(this.addr,e)}function A0(s,e){s.uniform2uiv(this.addr,e)}function R0(s,e){s.uniform3uiv(this.addr,e)}function C0(s,e){s.uniform4uiv(this.addr,e)}function I0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||bu,r[a])}function P0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tu,r[a])}function L0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wu,r[a])}function D0(s,e,t){let n=this.cache,i=e.length,r=bo(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Eu,r[a])}function U0(s){switch(s){case 5126:return m0;case 35664:return g0;case 35665:return x0;case 35666:return _0;case 35674:return y0;case 35675:return v0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return b0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}var jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p0(t.type)}},ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U0(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function N0(s,e,t){let n=s.name,i=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uu(t,c===void 0?new jl(o,s,e):new ec(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new tc(o),uu(t,u)),t=u}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);N0(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function du(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var F0=37297,B0=0;function O0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var fu=new Ve;function H0(s){tt._getMatrix(fu,tt.workingColorSpace,s);let e=`mat3( ${fu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Gs:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+O0(s.getShaderSource(e),o)}else return r}function z0(s,e){let t=H0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k0(s,e){let t;switch(e){case Ih:t="Linear";break;case Ph:t="Reinhard";break;case Lh:t="Cineon";break;case La:t="ACESFilmic";break;case Uh:t="AgX";break;case Nh:t="Neutral";break;case Dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new L;function G0(){tt.getLuminanceCoefficients(vo);let s=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function W0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xr(s){return s!==""}function mu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(s){return s.replace(q0,Z0)}var Y0=new Map;function Z0(s,e){let t=Xe[e];if(t===void 0){let n=Y0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace($0,J0)}function J0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _u(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Pi:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j0(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Pi&&(e="ENVMAP_MODE_REFRACTION"),e}function eg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Rh:e="ENVMAP_BLENDING_MIX";break;case Ch:e="ENVMAP_BLENDING_ADD";break}return e}function tg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ng(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=K0(t),c=Q0(t),h=j0(t),u=eg(t),f=tg(t),p=V0(t),g=W0(r),x=i.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),d.length>0&&(d+=`
`)):(m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),d=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),G0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=nc(a),a=mu(a,t),a=gu(a,t),o=nc(o),o=mu(o,t),o=gu(o,t),a=xu(a),o=xu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=b+m+a,S=b+d+o,R=du(i,i.VERTEX_SHADER,T),A=du(i,i.FRAGMENT_SHADER,S);i.attachShader(x,R),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function P(D){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(x)||"",X=i.getShaderInfoLog(R)||"",w=i.getShaderInfoLog(A)||"",H=O.trim(),W=X.trim(),ee=w.trim(),k=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,A);else{let le=pu(i,R,"vertex"),ve=pu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+le+`
`+ve)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(W===""||ee==="")&&(Z=!1);Z&&(D.diagnostics={runnable:k,programLog:H,vertexShader:{log:W,prefix:m},fragmentShader:{log:ee,prefix:d}})}i.deleteShader(R),i.deleteShader(A),N=new bs(i,x),y=X0(i,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,F0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var ig=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sc(e),t.set(e,n)),n}},sc=class{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}};function sg(s,e,t,n,i,r,a){let o=new cs,l=new ic,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,O,X){let w=O.fog,H=X.geometry,W=y.isMeshStandardMaterial?O.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),k=ee&&ee.mapping===hr?ee.image.height:null,Z=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=le!==void 0?le.length:0,Ae=0;H.morphAttributes.position!==void 0&&(Ae=1),H.morphAttributes.normal!==void 0&&(Ae=2),H.morphAttributes.color!==void 0&&(Ae=3);let rt,pt,et,$;if(Z){let ct=Dn[Z];rt=ct.vertexShader,pt=ct.fragmentShader}else rt=y.vertexShader,pt=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);let ne=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,Te=X.isBatchedMesh===!0,Ye=!!y.map,It=!!y.matcap,C=!!ee,mt=!!y.aoMap,He=!!y.lightMap,Le=!!y.bumpMap,xe=!!y.normalMap,lt=!!y.displacementMap,_e=!!y.emissiveMap,ze=!!y.metalnessMap,vt=!!y.roughnessMap,xt=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,z=y.iridescence>0,I=y.sheen>0,G=y.transmission>0,V=xt&&!!y.anisotropyMap,he=E&&!!y.clearcoatMap,te=E&&!!y.clearcoatNormalMap,me=E&&!!y.clearcoatRoughnessMap,J=z&&!!y.iridescenceMap,Q=z&&!!y.iridescenceThicknessMap,ae=I&&!!y.sheenColorMap,Re=I&&!!y.sheenRoughnessMap,we=!!y.specularMap,fe=!!y.specularColorMap,We=!!y.specularIntensityMap,U=G&&!!y.transmissionMap,oe=G&&!!y.thicknessMap,ce=!!y.gradientMap,Se=!!y.alphaMap,ie=y.alphaTest>0,K=!!y.alphaHash,Ee=!!y.extensions,Ge=Kn;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ge=s.toneMapping);let _t={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:pt,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Te,batchingColor:Te&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:It,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:k,aoMap:mt,lightMap:He,bumpMap:Le,normalMap:xe,displacementMap:f&&lt,emissiveMap:_e,normalMapObjectSpace:xe&&y.normalMapType===Hh,normalMapTangentSpace:xe&&y.normalMapType===Ol,metalnessMap:ze,roughnessMap:vt,anisotropy:xt,anisotropyMap:V,clearcoat:E,clearcoatMap:he,clearcoatNormalMap:te,clearcoatRoughnessMap:me,dispersion:_,iridescence:z,iridescenceMap:J,iridescenceThicknessMap:Q,sheen:I,sheenColorMap:ae,sheenRoughnessMap:Re,specularMap:we,specularColorMap:fe,specularIntensityMap:We,transmission:G,transmissionMap:U,thicknessMap:oe,gradientMap:ce,opaque:y.transparent===!1&&y.blending===Xn&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:ie,alphaHash:K,combine:y.combine,mapUv:Ye&&x(y.map.channel),aoMapUv:mt&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:Le&&x(y.bumpMap.channel),normalMapUv:xe&&x(y.normalMap.channel),displacementMapUv:lt&&x(y.displacementMap.channel),emissiveMapUv:_e&&x(y.emissiveMap.channel),metalnessMapUv:ze&&x(y.metalnessMap.channel),roughnessMapUv:vt&&x(y.roughnessMap.channel),anisotropyMapUv:V&&x(y.anisotropyMap.channel),clearcoatMapUv:he&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(y.sheenRoughnessMap.channel),specularMapUv:we&&x(y.specularMap.channel),specularColorMapUv:fe&&x(y.specularColorMap.channel),specularIntensityMapUv:We&&x(y.specularIntensityMap.channel),transmissionMapUv:U&&x(y.transmissionMap.channel),thicknessMapUv:oe&&x(y.thicknessMap.channel),alphaMapUv:Se&&x(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xe||xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(Ye||Se),fog:!!w,useFog:y.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xt,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(b(M,y),T(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){let M=g[y.type],D;if(M){let O=Dn[M];D=Jh.clone(O.uniforms)}else D=y.uniforms;return D}function R(y,M){let D;for(let O=0,X=h.length;O<X;O++){let w=h[O];if(w.cacheKey===M){D=w,++D.usedTimes;break}}return D===void 0&&(D=new ng(s,M,y,r),h.push(D)),D}function A(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:N}}function rg(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,g,x,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function o(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||ag),n.length>1&&n.sort(f||yu),i.length>1&&i.sort(f||yu)}function h(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function og(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new vu,s.set(n,[a])):i>=r.length?(a=new vu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function cg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hg=0;function ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dg(s){let e=new lg,t=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new at,a=new at;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,T=0,S=0,R=0,A=0,P=0;c.sort(ug);for(let y=0,M=c.length;y<M;y++){let D=c[y],O=D.color,X=D.intensity,w=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*X,u+=O.g*X,f+=O.b*X;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],X);P++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,k=t.get(D);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=W,p++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(X),W.distance=w,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[x]=W;let ee=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,ee.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=ee.matrix,D.castShadow){let k=t.get(D);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=H,S++}x++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(O).multiplyScalar(X),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let ee=D.shadow,k=t.get(D);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(X),W.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[d]=W,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=P,n.version=hg++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){let T=c[d];if(T.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Mu(s){let e=new dg(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function fg(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Mu(s),e.set(i,[o])):r>=a.length?(o=new Mu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gg(s,e,t){let n=new ps,i=new Be,r=new Be,a=new ut,o=new da({depthPacking:Oh}),l=new fa,c={},h=t.maxTextureSize,u={[Wn]:Wt,[Wt]:Wn,[Xt]:Xt},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new nt;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let d=this.type;this.render=function(A,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Jn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=d!==Ln&&this.type===Ln,w=d===Ln&&this.type!==Ln;for(let H=0,W=A.length;H<W;H++){let ee=A[H],k=ee.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Z=k.getFrameExtents();if(i.multiply(Z),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||X===!0||w===!0){let ve=this.type!==Ln?{minFilter:Yt,magFilter:Yt}:{};k.map!==null&&k.map.dispose(),k.map=new Rn(i.x,i.y,ve),k.map.texture.name=ee.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let le=k.getViewportCount();for(let ve=0;ve<le;ve++){let Ae=k.getViewport(ve);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),O.viewport(a),k.updateMatrices(ee,ve),n=k.getFrustum(),S(P,N,k.camera,ee,this.type)}k.isPointLightShadow!==!0&&this.type===Ln&&b(k,N),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,D)};function b(A,P){let N=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,N,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,N,p,x,null)}function T(A,P,N,y){let M=null,D=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=M.uuid,X=P.uuid,w=c[O];w===void 0&&(w={},c[O]=w);let H=w[X];H===void 0&&(H=M.clone(),w[X]=H,P.addEventListener("dispose",R)),M=H}if(M.visible=P.visible,M.wireframe=P.wireframe,y===Ln?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=s.properties.get(M);O.light=N}return M}function S(A,P,N,y,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let X=e.update(A),w=A.material;if(Array.isArray(w)){let H=X.groups;for(let W=0,ee=H.length;W<ee;W++){let k=H[W],Z=w[k.materialIndex];if(Z&&Z.visible){let le=T(A,Z,y,M);A.onBeforeShadow(s,A,P,N,X,le,k),s.renderBufferDirect(N,null,X,le,A,k),A.onAfterShadow(s,A,P,N,X,le,k)}}}else if(w.visible){let H=T(A,w,y,M);A.onBeforeShadow(s,A,P,N,X,H,null),s.renderBufferDirect(N,null,X,H,A,null),A.onAfterShadow(s,A,P,N,X,H,null)}}let O=A.children;for(let X=0,w=O.length;X<w;X++)S(O[X],P,N,y,M)}function R(A){A.target.removeEventListener("dispose",R);for(let N in c){let y=c[N],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var xg={[Ta]:wa,[Aa]:Ia,[Ra]:Pa,[Ti]:Ca,[wa]:Ta,[Ia]:Aa,[Pa]:Ra,[Ca]:Ti};function _g(s,e){function t(){let U=!1,oe=new ut,ce=null,Se=new ut(0,0,0,0);return{setMask:function(ie){ce!==ie&&!U&&(s.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){U=ie},setClear:function(ie,K,Ee,Ge,_t){_t===!0&&(ie*=Ge,K*=Ge,Ee*=Ge),oe.set(ie,K,Ee,Ge),Se.equals(oe)===!1&&(s.clearColor(ie,K,Ee,Ge),Se.copy(oe))},reset:function(){U=!1,ce=null,Se.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,ce=null,Se=null,ie=null;return{setReversed:function(K){if(oe!==K){let Ee=e.get("EXT_clip_control");K?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=K;let Ge=ie;ie=null,this.setClear(Ge)}},getReversed:function(){return oe},setTest:function(K){K?ne(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(K){ce!==K&&!U&&(s.depthMask(K),ce=K)},setFunc:function(K){if(oe&&(K=xg[K]),Se!==K){switch(K){case Ta:s.depthFunc(s.NEVER);break;case wa:s.depthFunc(s.ALWAYS);break;case Aa:s.depthFunc(s.LESS);break;case Ti:s.depthFunc(s.LEQUAL);break;case Ra:s.depthFunc(s.EQUAL);break;case Ca:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case Pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=K}},setLocked:function(K){U=K},setClear:function(K){ie!==K&&(oe&&(K=1-K),s.clearDepth(K),ie=K)},reset:function(){U=!1,ce=null,Se=null,ie=null,oe=!1}}}function i(){let U=!1,oe=null,ce=null,Se=null,ie=null,K=null,Ee=null,Ge=null,_t=null;return{setTest:function(ct){U||(ct?ne(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ct){oe!==ct&&!U&&(s.stencilMask(ct),oe=ct)},setFunc:function(ct,Fn,wn){(ce!==ct||Se!==Fn||ie!==wn)&&(s.stencilFunc(ct,Fn,wn),ce=ct,Se=Fn,ie=wn)},setOp:function(ct,Fn,wn){(K!==ct||Ee!==Fn||Ge!==wn)&&(s.stencilOp(ct,Fn,wn),K=ct,Ee=Fn,Ge=wn)},setLocked:function(ct){U=ct},setClear:function(ct){_t!==ct&&(s.clearStencil(ct),_t=ct)},reset:function(){U=!1,oe=null,ce=null,Se=null,ie=null,K=null,Ee=null,Ge=null,_t=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,T=null,S=null,R=null,A=null,P=new Pe(0,0,0),N=0,y=!1,M=null,D=null,O=null,X=null,w=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=ee>=1):k.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=ee>=2);let Z=null,le={},ve=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),rt=new ut().fromArray(ve),pt=new ut().fromArray(Ae);function et(U,oe,ce,Se){let ie=new Uint8Array(4),K=s.createTexture();s.bindTexture(U,K),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<ce;Ee++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(oe+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return K}let $={};$[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(Ti),Le(!1),xe(Tl),ne(s.CULL_FACE),mt(Jn);function ne(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Me(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Fe(U,oe){return u[U]!==oe?(s.bindFramebuffer(U,oe),u[U]=oe,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Te(U,oe){let ce=p,Se=!1;if(U){ce=f.get(oe),ce===void 0&&(ce=[],f.set(oe,ce));let ie=U.textures;if(ce.length!==ie.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let K=0,Ee=ie.length;K<Ee;K++)ce[K]=s.COLOR_ATTACHMENT0+K;ce.length=ie.length,Se=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Se=!0);Se&&s.drawBuffers(ce)}function Ye(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let It={[ci]:s.FUNC_ADD,[uh]:s.FUNC_SUBTRACT,[dh]:s.FUNC_REVERSE_SUBTRACT};It[fh]=s.MIN,It[ph]=s.MAX;let C={[mh]:s.ZERO,[gh]:s.ONE,[xh]:s.SRC_COLOR,[jr]:s.SRC_ALPHA,[bh]:s.SRC_ALPHA_SATURATE,[Mh]:s.DST_COLOR,[yh]:s.DST_ALPHA,[_h]:s.ONE_MINUS_SRC_COLOR,[ea]:s.ONE_MINUS_SRC_ALPHA,[Sh]:s.ONE_MINUS_DST_COLOR,[vh]:s.ONE_MINUS_DST_ALPHA,[Eh]:s.CONSTANT_COLOR,[Th]:s.ONE_MINUS_CONSTANT_COLOR,[wh]:s.CONSTANT_ALPHA,[Ah]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(U,oe,ce,Se,ie,K,Ee,Ge,_t,ct){if(U===Jn){x===!0&&(Me(s.BLEND),x=!1);return}if(x===!1&&(ne(s.BLEND),x=!0),U!==hh){if(U!==m||ct!==y){if((d!==ci||S!==ci)&&(s.blendEquation(s.FUNC_ADD),d=ci,S=ci),ct)switch(U){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qe:s.blendFunc(s.ONE,s.ONE);break;case Al:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qe:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,T=null,R=null,A=null,P.set(0,0,0),N=0,m=U,y=ct}return}ie=ie||oe,K=K||ce,Ee=Ee||Se,(oe!==d||ie!==S)&&(s.blendEquationSeparate(It[oe],It[ie]),d=oe,S=ie),(ce!==b||Se!==T||K!==R||Ee!==A)&&(s.blendFuncSeparate(C[ce],C[Se],C[K],C[Ee]),b=ce,T=Se,R=K,A=Ee),(Ge.equals(P)===!1||_t!==N)&&(s.blendColor(Ge.r,Ge.g,Ge.b,_t),P.copy(Ge),N=_t),m=U,y=!1}function He(U,oe){U.side===Xt?Me(s.CULL_FACE):ne(s.CULL_FACE);let ce=U.side===Wt;oe&&(ce=!ce),Le(ce),U.blending===Xn&&U.transparent===!1?mt(Jn):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function xe(U){U!==oh?(ne(s.CULL_FACE),U!==D&&(U===Tl?s.cullFace(s.BACK):U===lh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),D=U}function lt(U){U!==O&&(W&&s.lineWidth(U),O=U)}function _e(U,oe,ce){U?(ne(s.POLYGON_OFFSET_FILL),(X!==oe||w!==ce)&&(s.polygonOffset(oe,ce),X=oe,w=ce)):Me(s.POLYGON_OFFSET_FILL)}function ze(U){U?ne(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function vt(U){U===void 0&&(U=s.TEXTURE0+H-1),Z!==U&&(s.activeTexture(U),Z=U)}function xt(U,oe,ce){ce===void 0&&(Z===null?ce=s.TEXTURE0+H-1:ce=Z);let Se=le[ce];Se===void 0&&(Se={type:void 0,texture:void 0},le[ce]=Se),(Se.type!==U||Se.texture!==oe)&&(Z!==ce&&(s.activeTexture(ce),Z=ce),s.bindTexture(U,oe||$[U]),Se.type=U,Se.texture=oe)}function E(){let U=le[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(U){rt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function Re(U){pt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),pt.copy(U))}function we(U,oe){let ce=c.get(oe);ce===void 0&&(ce=new WeakMap,c.set(oe,ce));let Se=ce.get(U);Se===void 0&&(Se=s.getUniformBlockIndex(oe,U.name),ce.set(U,Se))}function fe(U,oe){let Se=c.get(oe).get(U);l.get(oe)!==Se&&(s.uniformBlockBinding(oe,Se,U.__bindingPointIndex),l.set(oe,Se))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,le={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,T=null,S=null,R=null,A=null,P=new Pe(0,0,0),N=0,y=!1,M=null,D=null,O=null,X=null,w=null,rt.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:Fe,drawBuffers:Te,useProgram:Ye,setBlending:mt,setMaterial:He,setFlipSided:Le,setCullFace:xe,setLineWidth:lt,setPolygonOffset:_e,setScissorTest:ze,activeTexture:vt,bindTexture:xt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:J,texImage3D:Q,updateUBOMapping:we,uniformBlockBinding:fe,texStorage2D:te,texStorage3D:me,texSubImage2D:I,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:he,scissor:ae,viewport:Re,reset:We}}function yg(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):Ws("canvas")}function x(E,_,z){let I=1,G=xt(E);if((G.width>z||G.height>z)&&(I=z/Math.max(G.width,G.height)),I<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let V=Math.floor(I*G.width),he=Math.floor(I*G.height);u===void 0&&(u=g(V,he));let te=_?g(V,he):u;return te.width=V,te.height=he,te.getContext("2d").drawImage(E,0,0,V,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+he+")."),te}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(E,_,z,I,G=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===s.RED&&(z===s.FLOAT&&(V=s.R32F),z===s.HALF_FLOAT&&(V=s.R16F),z===s.UNSIGNED_BYTE&&(V=s.R8)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(V=s.R8UI),z===s.UNSIGNED_SHORT&&(V=s.R16UI),z===s.UNSIGNED_INT&&(V=s.R32UI),z===s.BYTE&&(V=s.R8I),z===s.SHORT&&(V=s.R16I),z===s.INT&&(V=s.R32I)),_===s.RG&&(z===s.FLOAT&&(V=s.RG32F),z===s.HALF_FLOAT&&(V=s.RG16F),z===s.UNSIGNED_BYTE&&(V=s.RG8)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(V=s.RG8UI),z===s.UNSIGNED_SHORT&&(V=s.RG16UI),z===s.UNSIGNED_INT&&(V=s.RG32UI),z===s.BYTE&&(V=s.RG8I),z===s.SHORT&&(V=s.RG16I),z===s.INT&&(V=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(V=s.RGB8UI),z===s.UNSIGNED_SHORT&&(V=s.RGB16UI),z===s.UNSIGNED_INT&&(V=s.RGB32UI),z===s.BYTE&&(V=s.RGB8I),z===s.SHORT&&(V=s.RGB16I),z===s.INT&&(V=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),z===s.UNSIGNED_INT&&(V=s.RGBA32UI),z===s.BYTE&&(V=s.RGBA8I),z===s.SHORT&&(V=s.RGBA16I),z===s.INT&&(V=s.RGBA32I)),_===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),_===s.RGBA){let he=G?Gs:tt.getTransfer(I);z===s.FLOAT&&(V=s.RGBA32F),z===s.HALF_FLOAT&&(V=s.RGBA16F),z===s.UNSIGNED_BYTE&&(V=he===dt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(E,_){let z;return E?_===null||_===gi||_===ys?z=s.DEPTH24_STENCIL8:_===bn?z=s.DEPTH32F_STENCIL8:_===xs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===ys?z=s.DEPTH_COMPONENT24:_===bn?z=s.DEPTH_COMPONENT32F:_===xs&&(z=s.DEPTH_COMPONENT16),z}function R(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Yt&&E.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){let _=E.target;_.removeEventListener("dispose",A),N(_),_.isVideoTexture&&h.delete(_)}function P(E){let _=E.target;_.removeEventListener("dispose",P),M(_)}function N(E){let _=n.get(E);if(_.__webglInit===void 0)return;let z=E.source,I=f.get(z);if(I){let G=I[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&y(E),Object.keys(I).length===0&&f.delete(z)}n.remove(E)}function y(E){let _=n.get(E);s.deleteTexture(_.__webglTexture);let z=E.source,I=f.get(z);delete I[_.__cacheKey],a.memory.textures--}function M(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(_.__webglFramebuffer[I]))for(let G=0;G<_.__webglFramebuffer[I].length;G++)s.deleteFramebuffer(_.__webglFramebuffer[I][G]);else s.deleteFramebuffer(_.__webglFramebuffer[I]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[I])}else{if(Array.isArray(_.__webglFramebuffer))for(let I=0;I<_.__webglFramebuffer.length;I++)s.deleteFramebuffer(_.__webglFramebuffer[I]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let I=0;I<_.__webglColorRenderbuffer.length;I++)_.__webglColorRenderbuffer[I]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[I]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=E.textures;for(let I=0,G=z.length;I<G;I++){let V=n.get(z[I]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(z[I])}n.remove(E)}let D=0;function O(){D=0}function X(){let E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function w(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function H(E,_){let z=n.get(E);if(E.isVideoTexture&&ze(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let I=E.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,E,_);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function W(E,_){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){$(z,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function ee(E,_){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){$(z,E,_);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function k(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){ne(z,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}let Z={[qn]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},le={[Yt]:s.NEAREST,[Fh]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Na]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},ve={[zh]:s.NEVER,[qh]:s.ALWAYS,[kh]:s.LESS,[Hl]:s.LEQUAL,[Gh]:s.EQUAL,[Xh]:s.GEQUAL,[Vh]:s.GREATER,[Wh]:s.NOTEQUAL};function Ae(E,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===Na||_.magFilter===ur||_.magFilter===mi||_.minFilter===jt||_.minFilter===Na||_.minFilter===ur||_.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,Z[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Z[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Z[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,le[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==ur&&_.minFilter!==mi||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function rt(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let I=_.source,G=f.get(I);G===void 0&&(G={},f.set(I,G));let V=w(_);if(V!==E.__cacheKey){G[V]===void 0&&(G[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),G[V].usedTimes++;let he=G[E.__cacheKey];he!==void 0&&(G[E.__cacheKey].usedTimes--,he.usedTimes===0&&y(_)),E.__cacheKey=V,E.__webglTexture=G[V].texture}return z}function pt(E,_,z){return Math.floor(Math.floor(E/z)/_)}function et(E,_,z,I){let V=E.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,z,I,_.data);else{V.sort((Q,ae)=>Q.start-ae.start);let he=0;for(let Q=1;Q<V.length;Q++){let ae=V[he],Re=V[Q],we=ae.start+ae.count,fe=pt(Re.start,_.width,4),We=pt(ae.start,_.width,4);Re.start<=we+1&&fe===We&&pt(Re.start+Re.count-1,_.width,4)===fe?ae.count=Math.max(ae.count,Re.start+Re.count-ae.start):(++he,V[he]=Re)}V.length=he+1;let te=s.getParameter(s.UNPACK_ROW_LENGTH),me=s.getParameter(s.UNPACK_SKIP_PIXELS),J=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ae=V.length;Q<ae;Q++){let Re=V[Q],we=Math.floor(Re.start/4),fe=Math.ceil(Re.count/4),We=we%_.width,U=Math.floor(we/_.width),oe=fe,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,We,U,oe,ce,z,I,_.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,me),s.pixelStorei(s.UNPACK_SKIP_ROWS,J)}}function $(E,_,z){let I=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(I=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(I=s.TEXTURE_3D);let G=rt(E,_),V=_.source;t.bindTexture(I,E.__webglTexture,s.TEXTURE0+z);let he=n.get(V);if(V.version!==he.__version||G===!0){t.activeTexture(s.TEXTURE0+z);let te=tt.getPrimaries(tt.workingColorSpace),me=_.colorSpace===Qn?null:tt.getPrimaries(_.colorSpace),J=_.colorSpace===Qn||te===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let Q=x(_.image,!1,i.maxTextureSize);Q=vt(_,Q);let ae=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),we=T(_.internalFormat,ae,Re,_.colorSpace,_.isVideoTexture);Ae(I,_);let fe,We=_.mipmaps,U=_.isVideoTexture!==!0,oe=he.__version===void 0||G===!0,ce=V.dataReady,Se=R(_,Q);if(_.isDepthTexture)we=S(_.format===vs,_.type),oe&&(U?t.texStorage2D(s.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,we,Q.width,Q.height,0,ae,Re,null));else if(_.isDataTexture)if(We.length>0){U&&oe&&t.texStorage2D(s.TEXTURE_2D,Se,we,We[0].width,We[0].height);for(let ie=0,K=We.length;ie<K;ie++)fe=We[ie],U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,ae,Re,fe.data):t.texImage2D(s.TEXTURE_2D,ie,we,fe.width,fe.height,0,ae,Re,fe.data);_.generateMipmaps=!1}else U?(oe&&t.texStorage2D(s.TEXTURE_2D,Se,we,Q.width,Q.height),ce&&et(_,Q,ae,Re)):t.texImage2D(s.TEXTURE_2D,0,we,Q.width,Q.height,0,ae,Re,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,we,We[0].width,We[0].height,Q.depth);for(let ie=0,K=We.length;ie<K;ie++)if(fe=We[ie],_.format!==un)if(ae!==null)if(U){if(ce)if(_.layerUpdates.size>0){let Ee=ql(fe.width,fe.height,_.format,_.type);for(let Ge of _.layerUpdates){let _t=fe.data.subarray(Ge*Ee/fe.data.BYTES_PER_ELEMENT,(Ge+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Ge,fe.width,fe.height,1,ae,_t)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,ae,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,we,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,ae,Re,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,we,fe.width,fe.height,Q.depth,0,ae,Re,fe.data)}else{U&&oe&&t.texStorage2D(s.TEXTURE_2D,Se,we,We[0].width,We[0].height);for(let ie=0,K=We.length;ie<K;ie++)fe=We[ie],_.format!==un?ae!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,ae,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,ae,Re,fe.data):t.texImage2D(s.TEXTURE_2D,ie,we,fe.width,fe.height,0,ae,Re,fe.data)}else if(_.isDataArrayTexture)if(U){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,we,Q.width,Q.height,Q.depth),ce)if(_.layerUpdates.size>0){let ie=ql(Q.width,Q.height,_.format,_.type);for(let K of _.layerUpdates){let Ee=Q.data.subarray(K*ie/Q.data.BYTES_PER_ELEMENT,(K+1)*ie/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ae,Re,Ee)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,Re,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,ae,Re,Q.data);else if(_.isData3DTexture)U?(oe&&t.texStorage3D(s.TEXTURE_3D,Se,we,Q.width,Q.height,Q.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,Re,Q.data)):t.texImage3D(s.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,ae,Re,Q.data);else if(_.isFramebufferTexture){if(oe)if(U)t.texStorage2D(s.TEXTURE_2D,Se,we,Q.width,Q.height);else{let ie=Q.width,K=Q.height;for(let Ee=0;Ee<Se;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,we,ie,K,0,ae,Re,null),ie>>=1,K>>=1}}else if(We.length>0){if(U&&oe){let ie=xt(We[0]);t.texStorage2D(s.TEXTURE_2D,Se,we,ie.width,ie.height)}for(let ie=0,K=We.length;ie<K;ie++)fe=We[ie],U?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ae,Re,fe):t.texImage2D(s.TEXTURE_2D,ie,we,ae,Re,fe);_.generateMipmaps=!1}else if(U){if(oe){let ie=xt(Q);t.texStorage2D(s.TEXTURE_2D,Se,we,ie.width,ie.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,Re,Q)}else t.texImage2D(s.TEXTURE_2D,0,we,ae,Re,Q);m(_)&&d(I),he.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ne(E,_,z){if(_.image.length!==6)return;let I=rt(E,_),G=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);let V=n.get(G);if(G.version!==V.__version||I===!0){t.activeTexture(s.TEXTURE0+z);let he=tt.getPrimaries(tt.workingColorSpace),te=_.colorSpace===Qn?null:tt.getPrimaries(_.colorSpace),me=_.colorSpace===Qn||he===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!J&&!Q?ae[K]=x(_.image[K],!0,i.maxCubemapSize):ae[K]=Q?_.image[K].image:_.image[K],ae[K]=vt(_,ae[K]);let Re=ae[0],we=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),We=T(_.internalFormat,we,fe,_.colorSpace),U=_.isVideoTexture!==!0,oe=V.__version===void 0||I===!0,ce=G.dataReady,Se=R(_,Re);Ae(s.TEXTURE_CUBE_MAP,_);let ie;if(J){U&&oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,We,Re.width,Re.height);for(let K=0;K<6;K++){ie=ae[K].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){let Ge=ie[Ee];_.format!==un?we!==null?U?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,We,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,Ge.width,Ge.height,we,fe,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,We,Ge.width,Ge.height,0,we,fe,Ge.data)}}}else{if(ie=_.mipmaps,U&&oe){ie.length>0&&Se++;let K=xt(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,We,K.width,K.height)}for(let K=0;K<6;K++)if(Q){U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,we,fe,ae[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ae[K].width,ae[K].height,0,we,fe,ae[K].data);for(let Ee=0;Ee<ie.length;Ee++){let _t=ie[Ee].image[K].image;U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,_t.width,_t.height,we,fe,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,We,_t.width,_t.height,0,we,fe,_t.data)}}else{U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,fe,ae[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,we,fe,ae[K]);for(let Ee=0;Ee<ie.length;Ee++){let Ge=ie[Ee];U?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,we,fe,Ge.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,We,we,fe,Ge.image[K])}}}m(_)&&d(s.TEXTURE_CUBE_MAP),V.__version=G.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Me(E,_,z,I,G,V){let he=r.convert(z.format,z.colorSpace),te=r.convert(z.type),me=T(z.internalFormat,he,te,z.colorSpace),J=n.get(_),Q=n.get(z);if(Q.__renderTarget=_,!J.__hasExternalTextures){let ae=Math.max(1,_.width>>V),Re=Math.max(1,_.height>>V);G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?t.texImage3D(G,V,me,ae,Re,_.depth,0,he,te,null):t.texImage2D(G,V,me,ae,Re,0,he,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,I,G,Q.__webglTexture,0,lt(_)):(G===s.TEXTURE_2D||G>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,I,G,Q.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(E,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){let I=_.depthTexture,G=I&&I.isDepthTexture?I.type:null,V=S(_.stencilBuffer,G),he=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=lt(_);_e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,V,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,V,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,V,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,E)}else{let I=_.textures;for(let G=0;G<I.length;G++){let V=I[G],he=r.convert(V.format,V.colorSpace),te=r.convert(V.type),me=T(V.internalFormat,he,te,V.colorSpace),J=lt(_);z&&_e(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,me,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,me,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,me,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(_.depthTexture);I.__renderTarget=_,(!I.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let G=I.__webglTexture,V=lt(_);if(_.depthTexture.format===rs)_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,G,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,G,0);else if(_.depthTexture.format===vs)_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,G,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ye(E){let _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let I=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),I){let G=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,I.removeEventListener("dispose",G)};I.addEventListener("dispose",G),_.__depthDisposeCallback=G}_.__boundDepthTexture=I}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let I=E.texture.mipmaps;I&&I.length>0?Te(_.__webglFramebuffer[0],E):Te(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[I]),_.__webglDepthbuffer[I]===void 0)_.__webglDepthbuffer[I]=s.createRenderbuffer(),Fe(_.__webglDepthbuffer[I],E,!1);else{let G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[I];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,V)}}else{let I=E.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Fe(_.__webglDepthbuffer,E,!1);else{let G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,_,z){let I=n.get(E);_!==void 0&&Me(I.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ye(E)}function C(E){let _=E.texture,z=n.get(E),I=n.get(_);E.addEventListener("dispose",P);let G=E.textures,V=E.isWebGLCubeRenderTarget===!0,he=G.length>1;if(he||(I.__webglTexture===void 0&&(I.__webglTexture=s.createTexture()),I.__version=_.version,a.memory.textures++),V){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let me=0;me<_.mipmaps.length;me++)z.__webglFramebuffer[te][me]=s.createFramebuffer()}else z.__webglFramebuffer[te]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)z.__webglFramebuffer[te]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(he)for(let te=0,me=G.length;te<me;te++){let J=n.get(G[te]);J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&_e(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<G.length;te++){let me=G[te];z.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[te]);let J=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),ae=T(me.internalFormat,J,Q,me.colorSpace,E.isXRRenderTarget===!0),Re=lt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,z.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(z.__webglFramebuffer[te][me],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me);else Me(z.__webglFramebuffer[te],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(_)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let te=0,me=G.length;te<me;te++){let J=G[te],Q=n.get(J),ae=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ae(ae,J),Me(z.__webglFramebuffer,E,J,s.COLOR_ATTACHMENT0+te,ae,0),m(J)&&d(ae)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,I.__webglTexture),Ae(te,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(z.__webglFramebuffer[me],E,_,s.COLOR_ATTACHMENT0,te,me);else Me(z.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,te,0);m(_)&&d(te),t.unbindTexture()}E.depthBuffer&&Ye(E)}function mt(E){let _=E.textures;for(let z=0,I=_.length;z<I;z++){let G=_[z];if(m(G)){let V=b(E),he=n.get(G).__webglTexture;t.bindTexture(V,he),d(V),t.unbindTexture()}}}let He=[],Le=[];function xe(E){if(E.samples>0){if(_e(E)===!1){let _=E.textures,z=E.width,I=E.height,G=s.COLOR_BUFFER_BIT,V=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(E),te=_.length>1;if(te)for(let J=0;J<_.length;J++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let me=E.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let J=0;J<_.length;J++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(G|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(G|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[J]);let Q=n.get(_[J]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,z,I,0,0,z,I,G,s.NEAREST),l===!0&&(He.length=0,Le.length=0,He.push(s.COLOR_ATTACHMENT0+J),E.depthBuffer&&E.resolveDepthBuffer===!1&&(He.push(V),Le.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let J=0;J<_.length;J++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,he.__webglColorRenderbuffer[J]);let Q=n.get(_[J]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function lt(E){return Math.min(i.maxSamples,E.samples)}function _e(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ze(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function vt(E,_){let z=E.colorSpace,I=E.format,G=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==wi&&z!==Qn&&(tt.getTransfer(z)===dt?(I!==un||G!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function xt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=k,this.rebindTextures=It,this.setupRenderTarget=C,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_e}function vg(s,e){function t(n,i=Qn){let r,a=tt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===Ba)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return s.BYTE;if(n===Ll)return s.SHORT;if(n===xs)return s.UNSIGNED_SHORT;if(n===Fa)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===_s)return s.HALF_FLOAT;if(n===Nl)return s.ALPHA;if(n===Fl)return s.RGB;if(n===un)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===Ha)return s.RED;if(n===za)return s.RED_INTEGER;if(n===Bl)return s.RG;if(n===ka)return s.RG_INTEGER;if(n===Ga)return s.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Wa||n===Xa||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Ka||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===uo||n===fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===mo||n===go||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends Yn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new rc,d={},b=t.getContextAttributes(),T=null,S=null,R=[],A=[],P=new Be,N=null,y=new Nt;y.viewport=new ut;let M=new Nt;M.viewport=new ut;let D=[y,M],O=new Ea,X=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=R[$];return ne===void 0&&(ne=new hs,R[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=R[$];return ne===void 0&&(ne=new hs,R[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=R[$];return ne===void 0&&(ne=new hs,R[$]=ne),ne.getHandSpace()};function H($){let ne=A.indexOf($.inputSource);if(ne===-1)return;let Me=R[ne];Me!==void 0&&(Me.update($.inputSource,$.frame,c||a),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ee);for(let $=0;$<R.length;$++){let ne=A[$];ne!==null&&(A[$]=null,R[$].disconnect(ne))}X=null,w=null,m.reset();for(let $ in d)delete d[$];e.setRenderTarget(T),p=null,f=null,u=null,i=null,S=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ee),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=b.stencil?vs:rs,Fe=b.stencil?ys:gi);let Ye={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Rn(f.textureWidth,f.textureHeight,{format:un,type:Sn,depthTexture:new er(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Rn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee($){for(let ne=0;ne<$.removed.length;ne++){let Me=$.removed[ne],Fe=A.indexOf(Me);Fe>=0&&(A[Fe]=null,R[Fe].disconnect(Me))}for(let ne=0;ne<$.added.length;ne++){let Me=$.added[ne],Fe=A.indexOf(Me);if(Fe===-1){for(let Ye=0;Ye<R.length;Ye++)if(Ye>=A.length){A.push(Me),Fe=Ye;break}else if(A[Ye]===null){A[Ye]=Me,Fe=Ye;break}if(Fe===-1)break}let Te=R[Fe];Te&&Te.connect(Me)}}let k=new L,Z=new L;function le($,ne,Me){k.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);let Fe=k.distanceTo(Z),Te=ne.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,It=Te[14]/(Te[10]-1),C=Te[14]/(Te[10]+1),mt=(Te[9]+1)/Te[5],He=(Te[9]-1)/Te[5],Le=(Te[8]-1)/Te[0],xe=(Ye[8]+1)/Ye[0],lt=It*Le,_e=It*xe,ze=Fe/(-Le+xe),vt=ze*-Le;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let xt=It+ze,E=C+ze,_=lt-vt,z=_e+(Fe-vt),I=mt*C/E*xt,G=He*C/E*xt;$.projectionMatrix.makePerspective(_,z,I,G,xt,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ve($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ne=$.near,Me=$.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),O.near=M.near=y.near=ne,O.far=M.far=y.far=Me,(X!==O.near||w!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,w=O.far),O.layers.mask=$.layers.mask|6,y.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Fe=$.parent,Te=O.cameras;ve(O,Fe);for(let Ye=0;Ye<Te.length;Ye++)ve(Te[Ye],Fe);Te.length===2?le(O,y,M):O.projectionMatrix.copy(y.projectionMatrix),Ae($,O,Fe)};function Ae($,ne,Me){Me===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=as*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return d[$]};let rt=null;function pt($,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;Me.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let C=0;C<Me.length;C++){let mt=Me[C],He=null;if(p!==null)He=p.getViewport(mt);else{let xe=u.getViewSubImage(f,mt);He=xe.viewport,C===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Le=D[C];Le===void 0&&(Le=new Nt,Le.layers.enable(C),Le.viewport=new ut,D[C]=Le),Le.matrix.fromArray(mt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(mt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(He.x,He.y,He.width,He.height),C===0&&(O.matrix.copy(Le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(Le)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let C=u.getDepthInformation(Me[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<Me.length;C++){let mt=Me[C].camera;if(mt){let He=d[mt];He||(He=new tr,d[mt]=He);let Le=u.getCameraImage(mt);He.sourceTexture=Le}}}}for(let Me=0;Me<R.length;Me++){let Fe=A[Me],Te=R[Me];Fe!==null&&Te!==void 0&&Te.update(Fe,ne,c||a)}rt&&rt($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let et=new Su;et.setAnimationLoop(pt),this.setAnimationLoop=function($){rt=$},this.dispose=function(){}}},Ui=new en,bg=new at;function Eg(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Vl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,b,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Wt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Wt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),T=b.envMap,S=b.envMapRotation;T&&(m.envMap.value=T,Ui.copy(S),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Ui)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tg(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){let S=T.program;n.uniformBlockBinding(b,S)}function c(b,T){let S=i[b.id];S===void 0&&(g(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(b,R);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){let T=u();b.__bindingPointIndex=T;let S=s.createBuffer(),R=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let T=i[b.id],S=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let A=0,P=S.length;A<P;A++){let N=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=N.length;y<M;y++){let D=N[y];if(p(D,A,y,R)===!0){let O=D.__offset,X=Array.isArray(D.value)?D.value:[D.value],w=0;for(let H=0;H<X.length;H++){let W=X[H],ee=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+w,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,w),w+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,T,S,R){let A=b.value,P=T+"_"+S;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{let N=R[P];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[P]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(b){let T=b.uniforms,S=0,R=16;for(let P=0,N=T.length;P<N;P++){let y=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,D=y.length;M<D;M++){let O=y[M],X=Array.isArray(O.value)?O.value:[O.value];for(let w=0,H=X.length;w<H;w++){let W=X[w],ee=x(W),k=S%R,Z=k%ee.boundary,le=k+Z;S+=Z,le!==0&&R-le<ee.storage&&(S+=R-le),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=ee.storage}}}let A=S%R;return A>0&&(S+=R-A),b.__size=S,b.__cache={},this}function x(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){let T=b.target;T.removeEventListener("dispose",m);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}var So=class{constructor(e={}){let{canvas:t=Yh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=je;let A=0,P=0,N=null,y=-1,M=null,D=new ut,O=new ut,X=null,w=new Pe(0),H=0,W=t.width,ee=t.height,k=1,Z=null,le=null,ve=new ut(0,0,W,ee),Ae=new ut(0,0,W,ee),rt=!1,pt=new ps,et=!1,$=!1,ne=new at,Me=new L,Fe=new ut,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function It(){return N===null?k:1}let C=n;function mt(v,F){return t.getContext(v,F)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ie,!1),C===null){let F="webgl2";if(C=mt(F,v),C===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Le,xe,lt,_e,ze,vt,xt,E,_,z,I,G,V,he,te,me,J,Q,ae,Re,we,fe,We;function U(){He=new Vm(C),He.init(),we=new vg(C,He),Le=new Fm(C,He,e,we),xe=new _g(C,He),Le.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),lt=new qm(C),_e=new rg,ze=new yg(C,He,xe,_e,Le,we,lt),vt=new Om(S),xt=new Gm(S),E=new Kd(C),fe=new Um(C,E),_=new Wm(C,E,lt,fe),z=new Zm(C,_,E,lt),Q=new Ym(C,Le,ze),te=new Bm(_e),I=new sg(S,vt,xt,He,Le,fe,te),G=new Eg(S,_e),V=new og,he=new fg(He),J=new Dm(S,vt,xt,xe,z,p,l),me=new gg(S,z,Le),We=new Tg(C,lt,Le,xe),ae=new Nm(C,He,lt),Re=new Xm(C,He,lt),lt.programs=I.programs,S.capabilities=Le,S.extensions=He,S.properties=_e,S.renderLists=V,S.shadowMap=me,S.state=xe,S.info=lt}U();let oe=new ac(S,C);this.xr=oe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(W,ee,!1))},this.getSize=function(v){return v.set(W,ee)},this.setSize=function(v,F,q=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,ee=F,t.width=Math.floor(v*k),t.height=Math.floor(F*k),q===!0&&(t.style.width=v+"px",t.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(W*k,ee*k).floor()},this.setDrawingBufferSize=function(v,F,q){W=v,ee=F,k=q,t.width=Math.floor(v*q),t.height=Math.floor(F*q),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,F,q,Y){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,F,q,Y),xe.viewport(D.copy(ve).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ae)},this.setScissor=function(v,F,q,Y){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,F,q,Y),xe.scissor(O.copy(Ae).multiplyScalar(k).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(v){xe.setScissorTest(rt=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){le=v},this.getClearColor=function(v){return v.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,q=!0){let Y=0;if(v){let B=!1;if(N!==null){let re=N.texture.format;B=re===Ga||re===ka||re===za}if(B){let re=N.texture.type,pe=re===Sn||re===gi||re===xs||re===ys||re===Ba||re===Oa,be=J.getClearColor(),ye=J.getClearAlpha(),Ne=be.r,Oe=be.g,Ie=be.b;pe?(g[0]=Ne,g[1]=Oe,g[2]=Ie,g[3]=ye,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Ne,x[1]=Oe,x[2]=Ie,x[3]=ye,C.clearBufferiv(C.COLOR,0,x))}else Y|=C.COLOR_BUFFER_BIT}F&&(Y|=C.DEPTH_BUFFER_BIT),q&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),J.dispose(),V.dispose(),he.dispose(),_e.dispose(),vt.dispose(),xt.dispose(),z.dispose(),fe.dispose(),We.dispose(),I.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",wn),oe.removeEventListener("sessionend",Sc),_i.stop()};function ce(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let v=lt.autoReset,F=me.enabled,q=me.autoUpdate,Y=me.needsUpdate,B=me.type;U(),lt.autoReset=v,me.enabled=F,me.autoUpdate=q,me.needsUpdate=Y,me.type=B}function ie(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){let F=v.target;F.removeEventListener("dispose",K),Ee(F)}function Ee(v){Ge(v),_e.remove(v)}function Ge(v){let F=_e.get(v).programs;F!==void 0&&(F.forEach(function(q){I.releaseProgram(q)}),v.isShaderMaterial&&I.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,q,Y,B,re){F===null&&(F=Te);let pe=B.isMesh&&B.matrixWorld.determinant()<0,be=Yu(v,F,q,Y,B);xe.setMaterial(Y,pe);let ye=q.index,Ne=1;if(Y.wireframe===!0){if(ye=_.getWireframeAttribute(q),ye===void 0)return;Ne=2}let Oe=q.drawRange,Ie=q.attributes.position,Je=Oe.start*Ne,ft=(Oe.start+Oe.count)*Ne;re!==null&&(Je=Math.max(Je,re.start*Ne),ft=Math.min(ft,(re.start+re.count)*Ne)),ye!==null?(Je=Math.max(Je,0),ft=Math.min(ft,ye.count)):Ie!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Ie.count));let Ct=ft-Je;if(Ct<0||Ct===1/0)return;fe.setup(B,Y,be,q,ye);let Mt,gt=ae;if(ye!==null&&(Mt=E.get(ye),gt=Re,gt.setIndex(Mt)),B.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*It()),gt.setMode(C.LINES)):gt.setMode(C.TRIANGLES);else if(B.isLine){let De=Y.linewidth;De===void 0&&(De=1),xe.setLineWidth(De*It()),B.isLineSegments?gt.setMode(C.LINES):B.isLineLoop?gt.setMode(C.LINE_LOOP):gt.setMode(C.LINE_STRIP)}else B.isPoints?gt.setMode(C.POINTS):B.isSprite&&gt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let De=B._multiDrawStarts,Et=B._multiDrawCounts,it=B._multiDrawCount,$t=ye?E.get(ye).bytesPerElement:1,Hi=_e.get(Y).currentProgram.getUniforms();for(let Jt=0;Jt<it;Jt++)Hi.setValue(C,"_gl_DrawID",Jt),gt.render(De[Jt]/$t,Et[Jt])}else if(B.isInstancedMesh)gt.renderInstances(Je,Ct,B.count);else if(q.isInstancedBufferGeometry){let De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,De);gt.renderInstances(Je,Ct,Et)}else gt.render(Je,Ct)};function _t(v,F,q){v.transparent===!0&&v.side===Xt&&v.forceSinglePass===!1?(v.side=Wt,v.needsUpdate=!0,Sr(v,F,q),v.side=Wn,v.needsUpdate=!0,Sr(v,F,q),v.side=Xt):Sr(v,F,q)}this.compile=function(v,F,q=null){q===null&&(q=v),d=he.get(q),d.init(F),T.push(d),q.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),v!==q&&v.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();let Y=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let re=B.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){let be=re[pe];_t(be,q,B),Y.add(be)}else _t(re,q,B),Y.add(re)}),d=T.pop(),Y},this.compileAsync=function(v,F,q=null){let Y=this.compile(v,F,q);return new Promise(B=>{function re(){if(Y.forEach(function(pe){_e.get(pe).currentProgram.isReady()&&Y.delete(pe)}),Y.size===0){B(v);return}setTimeout(re,10)}He.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ct=null;function Fn(v){ct&&ct(v)}function wn(){_i.stop()}function Sc(){_i.start()}let _i=new Su;_i.setAnimationLoop(Fn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(v){ct=v,oe.setAnimationLoop(v),v===null?_i.stop():_i.start()},oe.addEventListener("sessionstart",wn),oe.addEventListener("sessionend",Sc),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,F,N),d=he.get(v,T.length),d.init(F),T.push(d),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pt.setFromProjectionMatrix(ne,xn,F.reversedDepth),$=this.localClippingEnabled,et=te.init(this.clippingPlanes,$),m=V.get(v,b.length),m.init(),b.push(m),oe.enabled===!0&&oe.isPresenting===!0){let re=S.xr.getDepthSensingMesh();re!==null&&Go(re,F,-1/0,S.sortObjects)}Go(v,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Z,le),Ye=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ye&&J.addToRenderList(m,v),this.info.render.frame++,et===!0&&te.beginShadows();let q=d.state.shadowsArray;me.render(q,v,F),et===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){let re=F.cameras;if(B.length>0)for(let pe=0,be=re.length;pe<be;pe++){let ye=re[pe];Ec(Y,B,v,ye)}Ye&&J.render(v);for(let pe=0,be=re.length;pe<be;pe++){let ye=re[pe];bc(m,v,ye,ye.viewport)}}else B.length>0&&Ec(Y,B,v,F),Ye&&J.render(v),bc(m,v,F);N!==null&&P===0&&(ze.updateMultisampleRenderTarget(N),ze.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,F),fe.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],et===!0&&te.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Go(v,F,q,Y){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||pt.intersectsSprite(v)){Y&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ne);let pe=z.update(v),be=v.material;be.visible&&m.push(v,pe,be,q,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||pt.intersectsObject(v))){let pe=z.update(v),be=v.material;if(Y&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Fe.copy(pe.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(ne)),Array.isArray(be)){let ye=pe.groups;for(let Ne=0,Oe=ye.length;Ne<Oe;Ne++){let Ie=ye[Ne],Je=be[Ie.materialIndex];Je&&Je.visible&&m.push(v,pe,Je,q,Fe.z,Ie)}}else be.visible&&m.push(v,pe,be,q,Fe.z,null)}}let re=v.children;for(let pe=0,be=re.length;pe<be;pe++)Go(re[pe],F,q,Y)}function bc(v,F,q,Y){let B=v.opaque,re=v.transmissive,pe=v.transparent;d.setupLightsView(q),et===!0&&te.setGlobalState(S.clippingPlanes,q),Y&&xe.viewport(D.copy(Y)),B.length>0&&Mr(B,F,q),re.length>0&&Mr(re,F,q),pe.length>0&&Mr(pe,F,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ec(v,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?_s:Sn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let re=d.state.transmissionRenderTarget[Y.id],pe=Y.viewport||D;re.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);let be=S.getRenderTarget(),ye=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(re),S.getClearColor(w),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Ye&&J.render(q);let Oe=S.toneMapping;S.toneMapping=Kn;let Ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),et===!0&&te.setGlobalState(S.clippingPlanes,Y),Mr(v,q,Y),ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re),He.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ft=0,Ct=F.length;ft<Ct;ft++){let Mt=F[ft],gt=Mt.object,De=Mt.geometry,Et=Mt.material,it=Mt.group;if(Et.side===Xt&&gt.layers.test(Y.layers)){let $t=Et.side;Et.side=Wt,Et.needsUpdate=!0,Tc(gt,q,Y,De,Et,it),Et.side=$t,Et.needsUpdate=!0,Je=!0}}Je===!0&&(ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re))}S.setRenderTarget(be,ye,Ne),S.setClearColor(w,H),Ie!==void 0&&(Y.viewport=Ie),S.toneMapping=Oe}function Mr(v,F,q){let Y=F.isScene===!0?F.overrideMaterial:null;for(let B=0,re=v.length;B<re;B++){let pe=v[B],be=pe.object,ye=pe.geometry,Ne=pe.group,Oe=pe.material;Oe.allowOverride===!0&&Y!==null&&(Oe=Y),be.layers.test(q.layers)&&Tc(be,F,q,ye,Oe,Ne)}}function Tc(v,F,q,Y,B,re){v.onBeforeRender(S,F,q,Y,B,re),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(S,F,q,Y,v,re),B.transparent===!0&&B.side===Xt&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,S.renderBufferDirect(q,F,Y,B,v,re),B.side=Wn,B.needsUpdate=!0,S.renderBufferDirect(q,F,Y,B,v,re),B.side=Xt):S.renderBufferDirect(q,F,Y,B,v,re),v.onAfterRender(S,F,q,Y,B,re)}function Sr(v,F,q){F.isScene!==!0&&(F=Te);let Y=_e.get(v),B=d.state.lights,re=d.state.shadowsArray,pe=B.state.version,be=I.getParameters(v,B.state,re,F,q),ye=I.getProgramCacheKey(be),Ne=Y.programs;Y.environment=v.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(v.isMeshStandardMaterial?xt:vt).get(v.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",K),Ne=new Map,Y.programs=Ne);let Oe=Ne.get(ye);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===pe)return Ac(v,be),Oe}else be.uniforms=I.getUniforms(v),v.onBeforeCompile(be,S),Oe=I.acquireProgram(be,ye),Ne.set(ye,Oe),Y.uniforms=be.uniforms;let Ie=Y.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ie.clippingPlanes=te.uniform),Ac(v,be),Y.needsLights=$u(v),Y.lightsStateVersion=pe,Y.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function wc(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Ac(v,F){let q=_e.get(v);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Yu(v,F,q,Y,B){F.isScene!==!0&&(F=Te),ze.resetTextureUnits();let re=F.fog,pe=Y.isMeshStandardMaterial?F.environment:null,be=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wi,ye=(Y.isMeshStandardMaterial?xt:vt).get(Y.envMap||pe),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color,Ct=Kn;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ct=S.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=Mt!==void 0?Mt.length:0,De=_e.get(Y),Et=d.state.lights;if(et===!0&&($===!0||v!==M)){let kt=v===M&&Y.id===y;te.setState(Y,v,kt)}let it=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Et.state.version||De.outputColorSpace!==be||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==ye||Y.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==te.numPlanes||De.numIntersection!==te.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Oe||De.morphTargets!==Ie||De.morphNormals!==Je||De.morphColors!==ft||De.toneMapping!==Ct||De.morphTargetsCount!==gt)&&(it=!0):(it=!0,De.__version=Y.version);let $t=De.currentProgram;it===!0&&($t=Sr(Y,F,B));let Hi=!1,Jt=!1,Rs=!1,Tt=$t.getUniforms(),on=De.uniforms;if(xe.useProgram($t.program)&&(Hi=!0,Jt=!0,Rs=!0),Y.id!==y&&(y=Y.id,Jt=!0),Hi||M!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",v.projectionMatrix),Tt.setValue(C,"viewMatrix",v.matrixWorldInverse);let qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(C,Me.setFromMatrixPosition(v.matrixWorld)),Le.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Jt=!0,Rs=!0)}if(B.isSkinnedMesh){Tt.setOptional(C,B,"bindMatrix"),Tt.setOptional(C,B,"bindMatrixInverse");let kt=B.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Tt.setValue(C,"boneTexture",kt.boneTexture,ze))}B.isBatchedMesh&&(Tt.setOptional(C,B,"batchingTexture"),Tt.setValue(C,"batchingTexture",B._matricesTexture,ze),Tt.setOptional(C,B,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",B._indirectTexture,ze),Tt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",B._colorsTexture,ze));let ln=q.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Q.update(B,q,$t),(Jt||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,Tt.setValue(C,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(on.envMap.value=ye,on.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),Jt&&(Tt.setValue(C,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Zu(on,Rs),re&&Y.fog===!0&&G.refreshFogUniforms(on,re),G.refreshMaterialUniforms(on,Y,k,ee,d.state.transmissionRenderTarget[v.id]),bs.upload(C,wc(De),on,ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bs.upload(C,wc(De),on,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(C,"center",B.center),Tt.setValue(C,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(C,"normalMatrix",B.normalMatrix),Tt.setValue(C,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let kt=Y.uniformsGroups;for(let qt=0,Vo=kt.length;qt<Vo;qt++){let yi=kt[qt];We.update(yi,$t),We.bind(yi,$t)}}return $t}function Zu(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function $u(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,F,q){let Y=_e.get(v);Y.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),_e.get(v.texture).__webglTexture=F,_e.get(v.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let q=_e.get(v);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};let Ju=C.createFramebuffer();this.setRenderTarget=function(v,F=0,q=0){N=v,A=F,P=q;let Y=!0,B=null,re=!1,pe=!1;if(v){let ye=_e.get(v);if(ye.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(ye.__webglFramebuffer===void 0)ze.setupRenderTarget(v);else if(ye.__hasExternalTextures)ze.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ie=v.depthTexture;if(ye.__boundDepthTexture!==Ie){if(Ie!==null&&_e.has(Ie)&&(v.width!==Ie.image.width||v.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(v)}}let Ne=v.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);let Oe=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?B=Oe[F][q]:B=Oe[F],re=!0):v.samples>0&&ze.useMultisampledRTT(v)===!1?B=_e.get(v).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[q]:B=Oe,D.copy(v.viewport),O.copy(v.scissor),X=v.scissorTest}else D.copy(ve).multiplyScalar(k).floor(),O.copy(Ae).multiplyScalar(k).floor(),X=rt;if(q!==0&&(B=Ju),xe.bindFramebuffer(C.FRAMEBUFFER,B)&&Y&&xe.drawBuffers(v,B),xe.viewport(D),xe.scissor(O),xe.setScissorTest(X),re){let ye=_e.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,q)}else if(pe){let ye=F;for(let Ne=0;Ne<v.textures.length;Ne++){let Oe=_e.get(v.textures[Ne]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,q,ye)}}else if(v!==null&&q!==0){let ye=_e.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ye.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(v,F,q,Y,B,re,pe,be=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){xe.bindFramebuffer(C.FRAMEBUFFER,ye);try{let Ne=v.textures[be],Oe=Ne.format,Ie=Ne.type;if(!Le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-Y&&q>=0&&q<=v.height-B&&(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(F,q,Y,B,we.convert(Oe),we.convert(Ie),re))}finally{let Ne=N!==null?_e.get(N).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,F,q,Y,B,re,pe,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye)if(F>=0&&F<=v.width-Y&&q>=0&&q<=v.height-B){xe.bindFramebuffer(C.FRAMEBUFFER,ye);let Ne=v.textures[be],Oe=Ne.format,Ie=Ne.type;if(!Le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(F,q,Y,B,we.convert(Oe),we.convert(Ie),0);let ft=N!==null?_e.get(N).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,ft);let Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Zh(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(Je),C.deleteSync(Ct),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,q=0){let Y=Math.pow(2,-q),B=Math.floor(v.image.width*Y),re=Math.floor(v.image.height*Y),pe=F!==null?F.x:0,be=F!==null?F.y:0;ze.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,pe,be,B,re),xe.unbindTexture()};let Ku=C.createFramebuffer(),Qu=C.createFramebuffer();this.copyTextureToTexture=function(v,F,q=null,Y=null,B=0,re=null){re===null&&(B!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=B,B=0):re=0);let pe,be,ye,Ne,Oe,Ie,Je,ft,Ct,Mt=v.isCompressedTexture?v.mipmaps[re]:v.image;if(q!==null)pe=q.max.x-q.min.x,be=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Oe=q.min.y,Ie=q.isBox3?q.min.z:0;else{let ln=Math.pow(2,-B);pe=Math.floor(Mt.width*ln),be=Math.floor(Mt.height*ln),v.isDataArrayTexture?ye=Mt.depth:v.isData3DTexture?ye=Math.floor(Mt.depth*ln):ye=1,Ne=0,Oe=0,Ie=0}Y!==null?(Je=Y.x,ft=Y.y,Ct=Y.z):(Je=0,ft=0,Ct=0);let gt=we.convert(F.format),De=we.convert(F.type),Et;F.isData3DTexture?(ze.setTexture3D(F,0),Et=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ze.setTexture2DArray(F,0),Et=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(F,0),Et=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let it=C.getParameter(C.UNPACK_ROW_LENGTH),$t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Hi=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),Rs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie);let Tt=v.isDataArrayTexture||v.isData3DTexture,on=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let ln=_e.get(v),kt=_e.get(F),qt=_e.get(ln.__renderTarget),Vo=_e.get(kt.__renderTarget);xe.bindFramebuffer(C.READ_FRAMEBUFFER,qt.__webglFramebuffer),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let yi=0;yi<ye;yi++)Tt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(v).__webglTexture,B,Ie+yi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,re,Ct+yi)),C.blitFramebuffer(Ne,Oe,pe,be,Je,ft,pe,be,C.DEPTH_BUFFER_BIT,C.NEAREST);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||_e.has(v)){let ln=_e.get(v),kt=_e.get(F);xe.bindFramebuffer(C.READ_FRAMEBUFFER,Ku),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qu);for(let qt=0;qt<ye;qt++)Tt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ln.__webglTexture,B,Ie+qt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ln.__webglTexture,B),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,kt.__webglTexture,re,Ct+qt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,kt.__webglTexture,re),B!==0?C.blitFramebuffer(Ne,Oe,pe,be,Je,ft,pe,be,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(Et,re,Je,ft,Ct+qt,Ne,Oe,pe,be):C.copyTexSubImage2D(Et,re,Je,ft,Ne,Oe,pe,be);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Et,re,Je,ft,Ct,pe,be,ye,gt,De,Mt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Et,re,Je,ft,Ct,pe,be,ye,gt,Mt.data):C.texSubImage3D(Et,re,Je,ft,Ct,pe,be,ye,gt,De,Mt):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,re,Je,ft,pe,be,gt,De,Mt.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,re,Je,ft,Mt.width,Mt.height,gt,Mt.data):C.texSubImage2D(C.TEXTURE_2D,re,Je,ft,pe,be,gt,De,Mt);C.pixelStorei(C.UNPACK_ROW_LENGTH,it),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Hi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rs),re===0&&F.generateMipmaps&&C.generateMipmap(Et),xe.unbindTexture()},this.initRenderTarget=function(v){_e.get(v).__webglFramebuffer===void 0&&ze.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ze.setTextureCube(v,0):v.isData3DTexture?ze.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ze.setTexture2DArray(v,0):ze.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){A=0,P=0,N=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var ke={xMin:-4.4,xMax:4.4,dividerX:1.3,enemyMinX:-4.4,enemyMaxX:1.3,enemyWidth:5.7,enemyCenterX:-1.55,rewardMinX:1.3,rewardMaxX:4.4,rewardWidth:3.1,rewardCenterX:2.85,yMin:-9.8,yMax:10.7,spawnY:9.35,defenseY:-7.05,gunnerY:-8.55,crateMinY:-6.75,cameraZ:24.5,cameraY:1.55,fov:46,playerMinX:-3.25,playerMaxX:3.25,playerSpeed:5.6},Ts={minX:-4.15,maxX:4.15,minY:-6.65,maxY:10.15,autoAimWidth:1.35},lc={maxArmor:100,startArmor:100};var ws=[{key:"common",name:"\u5E38\u89C4",color:9428223,css:"#8fdcff",weight:57},{key:"rare",name:"\u7A00\u6709",color:12033023,css:"#b79bff",weight:28},{key:"epic",name:"\u53F2\u8BD7",color:16762714,css:"#ffc75a",weight:12},{key:"legendary",name:"\u4F20\u8BF4",color:16737916,css:"#ff667c",weight:3}],xi=Object.fromEntries(ws.map(s=>[s.key,s])),cc=Object.fromEntries(ws.map((s,e)=>[s.key,e])),jn={vulcan:{id:"vulcan",name:"V-07 \u590D\u4EC7\u8005",shortName:"VULCAN",type:"\u5236\u5F0F\u673A\u67AA",icon:"MG",color:7533311,css:"#72f2ff",kind:"bullet",fireInterval:.105,damage:3.4,speed:46,count:1,spread:.032,pierce:0,radius:.2,recoil:.38,shake:.02,desc:"\u7A33\u5B9A\u3001\u7CBE\u51C6\u7684\u81EA\u52A8\u706B\u529B\u3002",sound:"mg"},pyro:{id:"pyro",name:"\u711A\u57CE \xB7 \u706B\u7130\u55B7\u5C04\u5668",shortName:"PYRO",type:"\u8FD1\u8DDD\u55B7\u5C04",icon:"PYR",color:16742958,css:"#ff7a2e",kind:"flame",fireInterval:.055,damage:1.65,speed:17,count:1,spread:.27,pierce:99,radius:.5,life:.52,recoil:.12,shake:.01,rarity:"rare",desc:"\u77ED\u8DDD\u7A7F\u900F\u706B\u7130\uFF0C\u9644\u52A0\u6301\u7EED\u71C3\u70E7\u3002",sound:"flame"},arc:{id:"arc",name:"\u4E07\u4F0F \xB7 \u7535\u5F27\u51B2\u950B\u67AA",shortName:"ARC-9",type:"\u8FDE\u9501\u7535\u51FB",icon:"ARC",color:12884991,css:"#c49bff",kind:"bullet",fireInterval:.088,damage:2.85,speed:54,count:1,spread:.046,pierce:0,radius:.22,recoil:.26,shake:.015,chain:2,rarity:"rare",desc:"\u547D\u4E2D\u540E\u7535\u5F27\u8DF3\u8DC3\u81F3\u9644\u8FD1\u76EE\u6807\u3002",sound:"arc"},rail:{id:"rail",name:"\u96F7\u795E \xB7 \u78C1\u8F68\u70AE",shortName:"RAIL",type:"\u8D2F\u7A7F\u5C04\u7EBF",icon:"RAIL",color:10352895,css:"#9df8ff",kind:"beam",fireInterval:.72,damage:37,speed:160,count:1,spread:0,pierce:99,radius:.34,recoil:1.2,shake:.22,rarity:"epic",desc:"\u84C4\u529B\u8D2F\u7A7F\u5C04\u7EBF\uFF0C\u6495\u5F00\u6574\u6761\u76F4\u7EBF\u3002",sound:"rail"},plasma:{id:"plasma",name:"\u6E6E\u706D \xB7 \u7B49\u79BB\u5B50\u70AE",shortName:"PLASMA",type:"\u8303\u56F4\u7206\u7834",icon:"PLS",color:10223459,css:"#9bff63",kind:"orb",fireInterval:.32,damage:13,speed:25,count:1,spread:.015,pierce:0,radius:.42,recoil:.9,shake:.08,aoe:1.65,rarity:"epic",desc:"\u7B49\u79BB\u5B50\u7206\u7403\uFF0C\u547D\u4E2D\u540E\u8303\u56F4\u707C\u70E7\u3002",sound:"plasma"}};var Au=["pyro","arc","rail","plasma"],hc=[{id:"damage",name:"\u9AD8\u538B\u67AA\u7BA1",icon:"DMG",tag:"WEAPON MOD",desc:["\u5168\u6B66\u5668\u4F24\u5BB3 +18%","\u5168\u6B66\u5668\u4F24\u5BB3 +30%","\u5168\u6B66\u5668\u4F24\u5BB3 +45%","\u5168\u6B66\u5668\u4F24\u5BB3 +70%"],effect:"damage",values:[.18,.3,.45,.7],weight:20},{id:"rate",name:"\u4F3A\u670D\u4F9B\u5F39",icon:"ROF",tag:"WEAPON MOD",desc:["\u5C04\u901F +14%","\u5C04\u901F +24%","\u5C04\u901F +36%","\u5C04\u901F +55%"],effect:"rate",values:[.14,.24,.36,.55],weight:18},{id:"multishot",name:"\u53CC\u8054\u67AA\u7BA1",icon:"\xD72",tag:"BARREL MOD",desc:["\u989D\u5916\u5F39\u4E38 +1","\u989D\u5916\u5F39\u4E38 +1","\u989D\u5916\u5F39\u4E38 +2","\u989D\u5916\u5F39\u4E38 +2"],effect:"multishot",values:[1,1,2,2],weight:13,maxStacks:4},{id:"pierce",name:"\u7A7F\u7532\u5F39\u82AF",icon:"AP",tag:"AMMO MOD",desc:["\u7A7F\u900F +1 \xB7 \u4F24\u5BB3 +6%","\u7A7F\u900F +2 \xB7 \u4F24\u5BB3 +8%","\u7A7F\u900F +3 \xB7 \u4F24\u5BB3 +12%","\u7A7F\u900F +5 \xB7 \u4F24\u5BB3 +18%"],effect:"pierce",values:[1,2,3,5],weight:12},{id:"crit",name:"\u66B4\u51FB\u6838\u5FC3",icon:"CRIT",tag:"FIRE CONTROL",desc:["\u66B4\u51FB\u7387 +6%","\u66B4\u51FB\u7387 +10%","\u66B4\u51FB\u7387 +15%","\u66B4\u51FB\u7387 +22%"],effect:"crit",values:[.06,.1,.15,.22],weight:12,maxStacks:5},{id:"explosive",name:"\u7206\u88C2\u5F39\u5934",icon:"HE",tag:"AMMO MOD",desc:["\u547D\u4E2D 10% \u5F15\u53D1\u7206\u70B8","\u547D\u4E2D 16% \u5F15\u53D1\u7206\u70B8","\u547D\u4E2D 24% \u5F15\u53D1\u7206\u70B8","\u547D\u4E2D 36% \u5F15\u53D1\u7206\u70B8"],effect:"explosive",values:[.1,.16,.24,.36],weight:9,maxStacks:3},{id:"frost",name:"\u51B7\u51DD\u5F39",icon:"CRYO",tag:"AMMO MOD",desc:["\u547D\u4E2D\u51CF\u901F 18%","\u547D\u4E2D\u51CF\u901F 28%","\u547D\u4E2D\u51CF\u901F 40%","\u547D\u4E2D\u51CF\u901F 55%"],effect:"frost",values:[.18,.28,.4,.55],weight:8,maxStacks:3},{id:"drone",name:"\u54E8\u6212\u65E0\u4EBA\u673A",icon:"DRN",tag:"AUTONOMOUS",desc:["\u90E8\u7F72 1 \u67B6\u81EA\u52A8\u653B\u51FB\u65E0\u4EBA\u673A","\u90E8\u7F72 1 \u67B6\u81EA\u52A8\u653B\u51FB\u65E0\u4EBA\u673A","\u90E8\u7F72 2 \u67B6\u81EA\u52A8\u653B\u51FB\u65E0\u4EBA\u673A","\u90E8\u7F72 2 \u67B6\u81EA\u52A8\u653B\u51FB\u65E0\u4EBA\u673A"],effect:"drone",values:[1,1,2,2],weight:9,maxStacks:3},{id:"repair",name:"\u7EB3\u7C73\u4FEE\u590D",icon:"MED",tag:"SUPPORT",desc:["\u7ACB\u5373\u4FEE\u590D 25 \u88C5\u7532","\u7ACB\u5373\u4FEE\u590D 45 \u88C5\u7532","\u7ACB\u5373\u4FEE\u590D 70 \u88C5\u7532","\u7ACB\u5373\u4FEE\u590D 100 \u88C5\u7532"],effect:"repair",values:[25,45,70,100],weight:8},{id:"armor",name:"\u53CD\u5E94\u88C5\u7532",icon:"ARM",tag:"SUPPORT",desc:["\u6700\u5927\u88C5\u7532 +15 \u5E76\u4FEE\u590D","\u6700\u5927\u88C5\u7532 +25 \u5E76\u4FEE\u590D","\u6700\u5927\u88C5\u7532 +40 \u5E76\u4FEE\u590D","\u6700\u5927\u88C5\u7532 +60 \u5E76\u4FEE\u590D"],effect:"armor",values:[15,25,40,60],weight:7},{id:"shield",name:"\u58C1\u5792\u529B\u573A",icon:"AEGIS",tag:"DEFENSE",desc:["\u8131\u6218 5 \u79D2\u540E\u6BCF\u79D2\u4FEE\u590D 2 \u88C5\u7532","\u8131\u6218 5 \u79D2\u540E\u6BCF\u79D2\u4FEE\u590D 4 \u88C5\u7532","\u8131\u6218 4 \u79D2\u540E\u6BCF\u79D2\u4FEE\u590D 7 \u88C5\u7532","\u8131\u6218 3 \u79D2\u540E\u6BCF\u79D2\u4FEE\u590D 12 \u88C5\u7532"],effect:"shield",values:[2,4,7,12],weight:6,maxStacks:4},{id:"shock",name:"\u8109\u51B2\u53D1\u751F\u5668",icon:"NOVA",tag:"AREA DENIAL",desc:["\u6BCF 9 \u79D2\u91CA\u653E\u51FB\u9000\u51B2\u51FB\u6CE2","\u6BCF 9 \u79D2\u91CA\u653E\u51FB\u9000\u51B2\u51FB\u6CE2","\u6BCF 7 \u79D2\u91CA\u653E\u5F3A\u5316\u51B2\u51FB\u6CE2","\u6BCF 5 \u79D2\u91CA\u653E\u6BC1\u706D\u51B2\u51FB\u6CE2"],effect:"shock",values:[1,1,2,3],weight:7,maxStacks:3}],$y=Object.fromEntries(hc.map(s=>[s.id,s])),yr={walker:{id:"walker",name:"\u884C\u5C38",hp:7.5,speed:1.05,damage:8,radius:.43,zRadius:.38,scale:1,score:100,weight:55},runner:{id:"runner",name:"\u75BE\u884C\u8005",hp:4.6,speed:1.95,damage:6,radius:.35,zRadius:.32,scale:.9,score:150,weight:26},brute:{id:"brute",name:"\u88C5\u7532\u611F\u67D3\u8005",hp:25,speed:.57,damage:19,radius:.66,zRadius:.52,scale:1.32,score:450,weight:10},spitter:{id:"spitter",name:"\u55B7\u5410\u8005",hp:13,speed:.74,damage:7,radius:.51,zRadius:.4,scale:1.05,score:300,ranged:!0,weight:9},boss:{id:"boss",name:"\u66B4\u541B",hp:230,speed:.31,damage:26,radius:1.25,zRadius:.7,scale:2.35,score:2600,boss:!0,weight:0}};function Eo(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new nt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ru(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);let g=Ru(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ru(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new ot(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}var wg=Math.PI*2,Zt=(s,e,t)=>Math.max(e,Math.min(t,s)),As=(s,e,t)=>s+(e-s)*t,To=(s,e,t,n)=>As(s,e,1-Math.exp(-t*n)),ge=(s,e)=>s+Math.random()*(e-s),Cu=(s,e)=>Math.floor(ge(s,e+1)),Iu=s=>s[Math.floor(Math.random()*s.length)],an=s=>Math.random()<s;function uc(s){return Math.max(0,Math.round(s)).toString().padStart(6,"0")}function wo(s){let e=Math.max(0,Math.floor(s));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function En(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,{canvas:t,ctx:t.getContext("2d")}}function Ag(s,e,t,n,i,r){let a=Math.min(r,n*.5,i*.5);s.beginPath(),s.moveTo(e+a,t),s.arcTo(e+n,t,e+n,t+i,a),s.arcTo(e+n,t+i,e,t+i,a),s.arcTo(e,t+i,e,t,a),s.arcTo(e,t,e+n,t,a),s.closePath()}function Bi(s=128,e="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let{canvas:n,ctx:i}=En(s,s),r=i.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return r.addColorStop(0,e),r.addColorStop(.24,e),r.addColorStop(.62,"rgba(255,255,255,.22)"),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,s,s),n}function Ao(s=128){let{canvas:e,ctx:t}=En(s,s),n=t.createRadialGradient(s/2,s/2,1,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,.9)"),n.addColorStop(.4,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,s,s),e}function Pu(){let{canvas:s,ctx:e}=En(32,128),t=e.createLinearGradient(0,0,0,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.35,"rgba(255,255,255,.9)"),t.addColorStop(.7,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(13,0,6,128),s}function Lu(){let{canvas:s,ctx:e}=En(128,64);e.clearRect(0,0,128,64),e.save(),e.translate(64,32),e.scale(1,.48);let t=e.createRadialGradient(0,0,2,0,0,62);return t.addColorStop(0,"rgba(0,0,0,.78)"),t.addColorStop(.55,"rgba(0,0,0,.32)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,62,0,wg),e.fill(),e.restore(),s}function Ro(){let{canvas:s,ctx:e}=En(128,64);e.fillStyle="#11151a",e.fillRect(0,0,128,64),e.save(),e.translate(64,32),e.rotate(-Math.PI/4),e.fillStyle="#ffb43d";for(let t=-160;t<160;t+=48)e.fillRect(t,-90,22,180);return e.restore(),s}function Du(s=64,e=256){let{canvas:t,ctx:n}=En(s,e),i=n.createLinearGradient(0,0,s,0);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.22,"rgba(255,255,255,.14)"),i.addColorStop(.46,"rgba(255,255,255,.92)"),i.addColorStop(.56,"rgba(255,255,255,.92)"),i.addColorStop(.78,"rgba(255,255,255,.14)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,s,e);let r=n.createLinearGradient(0,0,0,e);return r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.15,"rgba(255,255,255,1)"),r.addColorStop(.85,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.globalCompositeOperation="destination-in",n.fillStyle=r,n.fillRect(0,0,s,e),t}function dc(s){let{canvas:n,ctx:i}=En(512,300),r=s.color,a=s.rarity,o=s.name,l=s.hp,c=s.flash?1:.92;i.clearRect(0,0,512,300);let h=i.createLinearGradient(0,0,512,300);return h.addColorStop(0,"rgba(8,15,23,.94)"),h.addColorStop(.7,"rgba(5,10,16,.86)"),h.addColorStop(1,"rgba(5,9,14,.72)"),i.fillStyle=h,Ag(i,16,14,480,272,10),i.fill(),i.strokeStyle=r,i.globalAlpha=.72*c,i.lineWidth=2,i.stroke(),i.globalAlpha=1,i.fillStyle=r,i.globalAlpha=.95,i.fillRect(16,14,58,4),i.fillRect(16,14,4,52),i.fillRect(458,14,38,4),i.fillRect(492,14,4,38),i.fillRect(16,282,58,4),i.fillRect(16,234,4,52),i.globalAlpha=1,i.fillStyle=r,i.font="600 16px Consolas, monospace",i.textAlign="left",i.textBaseline="middle",i.globalAlpha=.92,i.fillText("SUPPLY // \u519B\u9700\u8865\u7ED9",36,44),i.textAlign="right",i.fillText(a,476,44),i.globalAlpha=1,i.strokeStyle="rgba(188,233,248,.15)",i.beginPath(),i.moveTo(36,60),i.lineTo(476,60),i.moveTo(36,206),i.lineTo(476,206),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.fillStyle=r,i.shadowColor=r,i.shadowBlur=s.flash?30:14,i.font=`800 ${l>999?92:114}px "Bahnschrift Condensed", "Arial Narrow", sans-serif`,i.fillText(String(l),512/2,133),i.shadowBlur=0,i.fillStyle="#f2fbff",i.font='700 29px "Microsoft YaHei", "Arial Narrow", sans-serif',i.textAlign="left",i.fillText(o,36,237),i.fillStyle="rgba(142,170,187,.8)",i.font="500 17px Consolas, monospace",i.textAlign="right",i.fillText(s.tag||"BREAK TO CLAIM",476,239),n}function Uu(s,e,t=.8){let n=Bi(128),i=new At(n);i.colorSpace=je;let r=new Zn({map:i,color:s,transparent:!0,opacity:t,blending:Qe,depthWrite:!1,depthTest:!0}),a=new hi(r);return a.scale.set(e,e,1),a.renderOrder=5,a}function Rg(s,e,t,n="#ff5566"){let{canvas:i,ctx:r}=En(1024,256);return r.clearRect(0,0,1024,256),r.strokeStyle=n,r.globalAlpha=.55,r.lineWidth=4,r.strokeRect(12,12,1e3,232),r.globalAlpha=.75,r.fillStyle=t,r.font='800 116px "Bahnschrift Condensed", "Arial Narrow", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(s,512,114),r.fillStyle=n,r.globalAlpha=.8,r.font="500 36px Consolas, monospace",r.fillText(e,512,198),r.globalAlpha=1,i}function Cg(s){let{canvas:e,ctx:t}=En(256,256);return t.clearRect(0,0,256,256),t.strokeStyle=s,t.lineWidth=10,t.globalAlpha=.85,t.beginPath(),t.moveTo(48,40),t.lineTo(128,112),t.lineTo(208,40),t.moveTo(48,128),t.lineTo(128,200),t.lineTo(208,128),t.stroke(),e}function Ig(s,e,t){let{canvas:n,ctx:i}=En(1024,512);i.clearRect(0,0,1024,512),i.strokeStyle=t,i.globalAlpha=.38,i.lineWidth=5,i.strokeRect(18,18,988,476),i.globalAlpha=.85,i.fillStyle=t,i.font='800 190px "Bahnschrift Condensed", "Arial Narrow", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(s,512,220),i.globalAlpha=.55,i.font="500 46px Consolas, monospace",i.fillText(e,512,350),i.globalAlpha=.28;for(let r=0;r<12;r+=1)i.fillRect(60+r*80,410,46,7);return n}function Nu(){let s=new Ze,e=new bt({color:1581098,metalness:.8,roughness:.35}),t=new bt({color:658706,metalness:.6,roughness:.45}),n=new de(new Mn(.24,.24,.32,12),e);n.rotation.x=Math.PI/2,n.position.z=.16,s.add(n);let i=new Ze,r=new $e(.62,1.3,.06);for(let l=0;l<4;l+=1){let c=new de(r,e);c.position.y=.75,c.rotation.z=.5,c.position.z=.14,c.userData.noMerge=!0;let h=new Ze;h.rotation.z=l/4*Math.PI*2,h.add(c),i.add(h)}s.add(i);let a=new de(new nn(1.65,.08,8,32),t);a.position.z=.08,s.add(a);let o=new de(new nn(1.35,.018,6,32),new Ue({color:2838363,transparent:!0,opacity:.4}));return o.position.z=.13,s.add(o),{group:s,blades:i}}function Pg(s){s.updateMatrixWorld(!0);let e=new Map;s.traverse(t=>{if(!t.isMesh||t.userData.noMerge)return;let n=t.material;if(!n||n.isShaderMaterial||n.transparent||!t.geometry||!t.geometry.attributes.position)return;let i=n.uuid;e.has(i)||e.set(i,{material:n,meshes:[]}),e.get(i).meshes.push(t)});for(let{material:t,meshes:n}of e.values()){if(n.length<2)continue;let i=[];for(let o of n){let l=o.geometry.clone();l.applyMatrix4(o.matrixWorld),l.index&&(l=l.toNonIndexed());for(let c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&l.deleteAttribute(c);if(!l.attributes.uv){let c=l.attributes.position.count;l.setAttribute("uv",new ot(new Float32Array(c*2),2))}i.push(l)}let r=Eo(i,!1);if(i.forEach(o=>o.dispose()),!r)continue;r.computeBoundingSphere();let a=new de(r,t);a.renderOrder=0,s.add(a);for(let o of n)o.parent?.remove(o)}}function Fu(s){let e=new Ze;e.name="environment",s.add(e);let t=new At(Bi(128));t.colorSpace=je;let n=new At(Ao(128));n.colorSpace=je;let i=new or(8896476,1772816,1.1);s.add(i);let r=new gs(14086143,2.75);r.position.set(-4,8,12),s.add(r);let a=new gs(16737894,.7);a.position.set(-7,1,5),s.add(a);let o=new Pn(16723779,30,17,1.8);o.position.set(-5.4,3.5,4),s.add(o);let l=new Pn(5237503,24,16,1.8);l.position.set(5.4,5,4),s.add(l);let c=new Pn(16756843,32,13,1.6);c.position.set(0,-7,5.5),s.add(c);let h=new Pn(6090751,16,9,1.8);h.position.set(-1.4,-6.1,2.8),s.add(h),s.fog=new Js(264205,.017);let u={uTime:{value:0},uIntensity:{value:.4}},f=new Ht({uniforms:u,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uIntensity;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = vUv;
        vec3 col = mix(vec3(0.013, 0.018, 0.027), vec3(0.006, 0.009, 0.014), smoothstep(0.0, 1.0, uv.y));
        col += vec3(0.008, 0.019, 0.026) * (1.0 - uv.y);

        float redMask = smoothstep(0.58, 0.10, uv.x) * smoothstep(0.04, 0.60, uv.y) * (1.0 - smoothstep(0.74, 1.0, uv.y));
        float cyanMask = smoothstep(0.42, 0.90, uv.x) * smoothstep(0.04, 0.58, uv.y) * (1.0 - smoothstep(0.74, 1.0, uv.y));
        col += vec3(0.23, 0.018, 0.028) * pow(redMask, 1.9) * (0.68 + uIntensity * 0.2);
        col += vec3(0.012, 0.115, 0.145) * pow(cyanMask, 1.9) * 0.8;

        float centre = exp(-pow((uv.x - 0.5) * 10.0, 2.0));
        col *= 1.0 - centre * 0.45;

        // industrial wall seams
        float sx = abs(fract(uv.x * 16.0) - 0.5);
        float sy = abs(fract(uv.y * 11.0) - 0.5);
        col += vec3(0.025, 0.042, 0.052) * smoothstep(0.478, 0.5, sx) * 0.32;
        col += vec3(0.018, 0.030, 0.039) * smoothstep(0.475, 0.5, sy) * 0.25;

        // distant maintenance strip lights
        float strip = smoothstep(0.985, 1.0, fract(uv.x * 8.0 + 0.15)) * smoothstep(0.68, 0.84, uv.y) * (1.0 - smoothstep(0.86, 0.94, uv.y));
        col += vec3(0.35, 0.16, 0.08) * strip * 0.25;
        float stripC = smoothstep(0.985, 1.0, fract(uv.x * 8.0 + 0.62)) * smoothstep(0.5, 0.62, uv.y) * (1.0 - smoothstep(0.64, 0.72, uv.y));
        col += vec3(0.06, 0.28, 0.31) * stripC * 0.25;

        // horizontal fog bands
        float band = smoothstep(0.0, 0.08, abs(fract(uv.y * 18.0 - uTime * 0.006) - 0.5) - 0.42);
        col += vec3(0.02, 0.035, 0.04) * band * 0.12;

        float vignette = smoothstep(0.90, 0.32, length((uv - 0.5) * vec2(0.94, 0.7)));
        col *= 0.58 + vignette * 0.42;

        float grain = hash21(uv * vec2(920.0, 520.0) + uTime * 0.13) - 0.5;
        col += grain * 0.017;

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,depthWrite:!0,fog:!1}),p=new de(new Rt(52,32),f);p.position.set(0,2,-9.5),e.add(p);let g=Rg("SECTOR 09","CONTAINMENT / LAST STAND","#798f9d","#b33a46"),x=new At(g);x.colorSpace=je;let m=new de(new Rt(11,2.75),new Ue({map:x,transparent:!0,opacity:.13,depthWrite:!1}));m.position.set(0,4.1,-7.8),e.add(m);let d=new bt({color:1054753,metalness:.86,roughness:.34}),b=new bt({color:527635,metalness:.75,roughness:.46}),T=new bt({color:1119514,metalness:.15,roughness:.9}),S=new Ue({color:16753456}),R=new Ue({color:4385535}),A=new Ue({color:16725061}),P=[];for(let I of[-1,1]){let G=I*5.25,V=new de(new $e(.72,25,1.6),d);V.position.set(G,.5,-3.3),e.add(V);let he=new de(new $e(.04,23.5,.06),I<0?new Ue({color:5971236}):new Ue({color:1524556}));he.position.set(I*4.88,.5,-2.47),e.add(he);let te=new de(new Mn(.11,.11,23,8),b);te.position.set(I*4.95,.3,-3.05),e.add(te);for(let Q=0;Q<5;Q+=1){let ae=new de(new nn(.15,.025,5,12),Q%2===0?S:I<0?A:R);ae.position.set(I*4.95,-8+Q*4.2,-3.05),ae.rotation.x=Math.PI/2,e.add(ae)}let me=new de(new $e(.12,19.8,.5),b);me.position.set(I*4.62,.3,-.42),e.add(me);let J=new de(new $e(.025,19.4,.035),new Ue({color:I<0?16728401:5107711,transparent:!0,opacity:.65,blending:Qe,depthWrite:!1}));J.position.set(I*4.55,.3,.02),e.add(J),P.push(J);for(let Q=0;Q<6;Q+=1){let ae=new de(new $e(.62,.08,.65),d);ae.position.set(I*4.76,-8.2+Q*3.35,-.4),e.add(ae)}}for(let I of[9.8,-7.45]){let G=new de(new $e(11.6,.28,.8),d);G.position.set(0,I,-2.3),e.add(G);let V=new de(new $e(11.3,.035,.04),new Ue({color:I>0?7750447:6955047,transparent:!0,opacity:.45}));V.position.set(0,I-.16,-1.89),e.add(V)}let N=new tn({color:725272,transparent:!0,opacity:.9});for(let I=0;I<5;I+=1){let G=[],V=-5.6+I*2.8;for(let te=0;te<12;te+=1)G.push(new L(V+Math.sin(te*.9+I)*.08,11.5,-3+te*.17));let he=new nt().setFromPoints(G);e.add(new vn(he,N))}let y=Nu();y.group.position.set(-3.45,3.5,-7.1),y.group.scale.setScalar(.95),e.add(y.group);let M=Nu();M.group.position.set(3.55,-1.3,-7.4),M.group.scale.setScalar(.72),M.group.rotation.z=1.2,e.add(M.group);for(let I of[-1,1]){let G=new de(new di(2.65,8.4,24,1,!0),new Ue({color:I<0?16739671:5500415,transparent:!0,opacity:.022,side:Xt,blending:Qe,depthWrite:!1}));G.position.set(I*3.15,3.4,-1.45),e.add(G)}for(let I of[-1,1]){let G=new de(new $e(1.1,.08,.18),new Ue({color:14678271}));G.position.set(I*3.2,8,-1.35),e.add(G);let V=Uu(I<0?16756839:7336703,3.2,.12);V.position.copy(G.position),e.add(V)}let D=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,O=`
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uTint;
    uniform float uSide;
    uniform float uThreat;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec3 col = vec3(0.010, 0.014, 0.020);
      col += uTint * 0.028;

      // large panels
      float vertical = abs(fract(uv.x * 5.0) - 0.5);
      float horizontal = abs(fract(uv.y * 13.0) - 0.5);
      col += uTint * 0.036 * smoothstep(0.482, 0.5, vertical);
      col += uTint * 0.055 * smoothstep(0.478, 0.5, horizontal);

      // fine grating
      float grate = step(0.74, fract(uv.y * 128.0)) * step(0.2, fract(uv.x * 36.0));
      col += uTint * 0.012 * grate;

      // inner edge light
      float edge = smoothstep(0.42, 0.495, abs(uv.x - 0.5));
      col += uTint * 0.14 * edge;
      col += uTint * 0.03 * smoothstep(0.0, 0.03, uv.x) * (1.0 - smoothstep(0.09, 0.14, uv.x));

      // scan pulse
      float scan = smoothstep(0.92, 1.0, sin(uv.y * 6.0 - uTime * 0.35 + uSide) * 0.5 + 0.5);
      col += uTint * 0.020 * scan;

      // hazard wash at danger line
      float danger = smoothstep(0.84, 0.93, uv.y);
      col += vec3(0.20, 0.03, 0.03) * danger * (0.28 + uThreat * 0.05);

      // vignette
      float vig = smoothstep(0.85, 0.25, length((uv - vec2(0.5, 0.48)) * vec2(0.9, 0.55)));
      col *= 0.55 + vig * 0.5;
      col += (hash21(uv * vec2(810.0, 432.0) + uTime) - 0.5) * 0.012;

      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,X=[];for(let I of[-1,1]){let G=I<0,V=G?ke.enemyWidth:ke.rewardWidth,he=G?ke.enemyCenterX:ke.rewardCenterX,te={uTime:{value:0},uTint:{value:new Pe(G?10364727:1279648)},uSide:{value:I*1.4},uThreat:{value:.2}};X.push(te);let me=new de(new Rt(V,19.8),new Ht({uniforms:te,vertexShader:D,fragmentShader:O,depthWrite:!0,fog:!1}));me.position.set(he,.25,-.55),e.add(me);for(let ae=0;ae<8;ae+=1){let Re=new de(new $e(V-.3,.035,.06),b);Re.position.set(he,-8+ae*2.42,-.46),e.add(Re)}let J=new At(Cg(G?"#bb3b49":"#2aa9bd"));J.colorSpace=je;let Q=new Ue({map:J,transparent:!0,opacity:.18,depthWrite:!1,blending:Qe});for(let ae of[-3.7,1.4,6.5]){let Re=new de(new Rt(1.1,1.1),Q);Re.position.set(he,ae,-.42),e.add(Re)}}for(let[I,G,V,he]of[[-1,"CONTAINMENT","BREACH / \u5C01\u9501\u5931\u6548","#c44450"],[1,"ARMORY","OPERATOR ACCESS / \u706B\u529B\u8BB8\u53EF","#2eabbd"]]){let te=I<0?ke.enemyWidth:ke.rewardWidth,me=I<0?ke.enemyCenterX:ke.rewardCenterX,J=te*.86,Q=new At(Ig(G,V,he));Q.colorSpace=je;let ae=new de(new Rt(J,J*.5),new Ue({map:Q,transparent:!0,opacity:.17,depthWrite:!1,blending:Qe}));ae.position.set(me,-2.4,-.43),e.add(ae)}let w=new de(new $e(.34,17.6,.42),b);w.position.set(ke.dividerX,1.6,-.29),e.add(w);let H=new At(Ro());H.colorSpace=je,H.wrapS=qn,H.wrapT=qn,H.repeat.set(1,14);let W=new de(new Rt(.13,17),new Ue({map:H,color:9270343,transparent:!0,opacity:.42}));W.position.set(ke.dividerX,1.7,-.055),e.add(W);let ee=[];for(let I of[-1,1]){let G=new de(new $e(.025,17,.03),new Ue({color:I<0?16727888:5108479,transparent:!0,opacity:.8,blending:Qe,depthWrite:!1}));G.position.set(ke.dividerX+I*.17,1.7,.02),e.add(G),ee.push(G)}let k=[];for(let I=0;I<9;I+=1){let G=new de(new $n(.055,6,6),I%2===0?A:R);G.position.set(ke.dividerX,-6.8+I*2.125,.1),G.userData.noMerge=!0,e.add(G),k.push(G)}let Z=new Ze;Z.position.set(0,10.25,-.7);let le=new de(new $e(9.5,.42,.7),d);Z.add(le);let ve=new de(new Rt(9.2,.16),new Ue({map:(()=>{let I=new At(Ro());return I.colorSpace=je,I.wrapS=qn,I.repeat.set(8,1),I})(),transparent:!0,opacity:.75}));ve.position.set(0,-.05,.36),Z.add(ve);for(let I of[-1,1]){let G=new de(new $e(.22,1.1,.65),b);G.position.set(I*4.45,-.68,0),Z.add(G);let V=Uu(I<0?16727888:5108479,1.2,.7);V.position.set(I*4,-.55,.45),Z.add(V)}e.add(Z);let Ae=new Ze;Ae.position.set(0,-7.16,.1);let rt=new de(new $e(9.1,.34,.9),d);Ae.add(rt);let pt=new de(new Rt(8.9,.24),new Ue({map:(()=>{let I=new At(Ro());return I.colorSpace=je,I.wrapS=qn,I.repeat.set(10,1),I})(),color:10454615,transparent:!0,opacity:.62}));pt.position.set(0,.02,.46),Ae.add(pt);for(let I=0;I<7;I+=1){let G=new de(new $e(.5,.5,.12),b);G.position.set(-3.6+I*1.2,-.38,.45),Ae.add(G)}let et=new de(new $e(8.9,.025,.03),new Ue({color:16725061,transparent:!0,opacity:.8,blending:Qe,depthWrite:!1}));et.position.set(0,.2,.49),Ae.add(et),e.add(Ae);let $=new Ze;$.position.set(0,-8.86,.18);let ne=new de(new $e(8.85,.12,.78),b);$.add(ne);for(let I=0;I<13;I+=1){let G=new de(new $e(.1,.16,.9),d);G.position.set(-4.15+I*.69,.02,.02),$.add(G)}let Me=new de(new $e(8.5,.018,.03),new Ue({color:7337215,transparent:!0,opacity:.42,blending:Qe,depthWrite:!1}));Me.position.set(0,.09,.47),$.add(Me);let Fe=new de(new $e(8.5,.018,.025),new Ue({color:16729429,transparent:!0,opacity:.28,blending:Qe,depthWrite:!1}));Fe.position.set(0,.09,-.38),$.add(Fe),e.add($);let Te=new tn({color:2438205,transparent:!0,opacity:.65});for(let I=0;I<3;I+=1){let G=[];for(let V=0;V<=32;V+=1){let he=-4.2+V/32*8.4;G.push(new L(he,-6.55+I*.1+Math.sin(V*1.9+I)*.04,.2))}e.add(new vn(new nt().setFromPoints(G),Te))}let Ye=460,It=new nt,C=new Float32Array(Ye*3),mt=new Float32Array(Ye);for(let I=0;I<Ye;I+=1)C[I*3]=-6.8+Math.random()*13.6,C[I*3+1]=-10+Math.random()*22.5,C[I*3+2]=-4.2+Math.random()*7.5,mt[I]=4+Math.random()*7;It.setAttribute("position",new ot(C,3).setUsage(rn));let He=new At(Pu());He.colorSpace=je;let Le=new ui(It,new Ri({color:10149375,size:.2,map:He,transparent:!0,opacity:.27,depthWrite:!1,blending:Qe,sizeAttenuation:!0}));Le.frustumCulled=!1,Le.renderOrder=4,e.add(Le);let xe=100,lt=new nt,_e=new Float32Array(xe*3),ze=new Float32Array(xe*3),vt=new Float32Array(xe*4),xt=new Pe;for(let I=0;I<xe;I+=1){_e[I*3]=-5.5+Math.random()*11,_e[I*3+1]=-8+Math.random()*18,_e[I*3+2]=-3.5+Math.random()*5;let G=_e[I*3]<0;xt.setHex(G?Math.random()<.7?16735568:16757084:Math.random()<.7?6089983:16764787),ze[I*3]=xt.r,ze[I*3+1]=xt.g,ze[I*3+2]=xt.b,vt[I*4]=Math.random()*Math.PI*2,vt[I*4+1]=.15+Math.random()*.55,vt[I*4+2]=.12+Math.random()*.45,vt[I*4+3]=Math.random()}lt.setAttribute("position",new ot(_e,3).setUsage(rn)),lt.setAttribute("color",new ot(ze,3));let E=new ui(lt,new Ri({size:.065,map:n,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:Qe,sizeAttenuation:!0}));E.frustumCulled=!1,E.renderOrder=5,e.add(E);let _=new de(new Rt(14,22),new Ue({color:728871,transparent:!0,opacity:.12,blending:Qe,depthWrite:!1}));_.position.set(0,0,6),e.add(_),Pg(e);function z(I,G,V=1){u.uTime.value=G,u.uIntensity.value=V;for(let J of X)J.uTime.value=G,J.uThreat.value=V;let he=It.attributes.position.array;for(let J=0;J<Ye;J+=1)he[J*3+1]-=mt[J]*I,he[J*3]-=I*.6,he[J*3+1]<-10.5&&(he[J*3+1]=11.8,he[J*3]=-6.8+Math.random()*13.6,he[J*3+2]=-4.2+Math.random()*7.5),he[J*3]<-7&&(he[J*3]=6.8);It.attributes.position.needsUpdate=!0;let te=lt.attributes.position.array;for(let J=0;J<xe;J+=1){let Q=vt[J*4],ae=vt[J*4+1];te[J*3]+=Math.sin(G*.35+Q)*I*.06,te[J*3+1]+=I*ae*.3,te[J*3+2]+=Math.cos(G*.22+Q)*I*.02,te[J*3+1]>11&&(te[J*3+1]=-9,te[J*3]=-5.5+Math.random()*11)}lt.attributes.position.needsUpdate=!0,y.blades.rotation.z-=I*1.6,M.blades.rotation.z+=I*1.1;let me=.5+Math.sin(G*1.7)*.5;o.intensity=20+me*15,l.intensity=13+Math.sin(G*1.2+1.1)*5,c.intensity=26+Math.sin(G*2.4)*4,h.intensity=13+Math.sin(G*1.8+2)*4;for(let J=0;J<k.length;J+=1){let Q=Math.sin(G*2.2-J*.7);k[J].scale.setScalar(Q>.55?1.8:.75)}for(let J=0;J<ee.length;J+=1)ee[J].material.opacity=.65+Math.sin(G*2+J)*.2;for(let J=0;J<P.length;J+=1)P[J].material.opacity=.52+Math.sin(G*1.4+J*1.7)*.16;H.offset.y=G*.006%1}return{group:e,update:z,redLight:o,cyanLight:l,warmLight:c,backdrop:p,laneUniforms:X,setLowHealth(I){o.intensity+=I?6:0}}}var mc=new At(Bi(128));mc.colorSpace=je;var Hu=new At(Lu());Hu.colorSpace=je;var Lg=new Ue({map:Hu,transparent:!0,opacity:.55,depthWrite:!1}),Dg=new Rt(1.2,.62),se=new $e(1,1,1),Nn=new $n(1,12,10),Ft=new Mn(1,1,1,10),ti=new nr(1,1.2,4,8),Tn=new nn(1,.08,6,20);function j(s,e,t,n=[0,0,0],i=[1,1,1],r=[0,0,0]){let a=new de(e,t);return a.position.set(...n),a.scale.set(...i),a.rotation.set(...r),s.add(a),a}function dn(s,e=1,t=.8){let n=new Zn({map:mc,color:s,transparent:!0,opacity:t,blending:Qe,depthWrite:!1}),i=new hi(n);return i.scale.set(e,e,1),i.renderOrder=9,i}function zu(){let s=new Ze;s.position.set(0,-8.55,.15),s.scale.setScalar(1.09);let e=new bt({color:3820377,metalness:.68,roughness:.34}),t=new bt({color:1582127,metalness:.62,roughness:.48}),n=new bt({color:2371901,metalness:.05,roughness:.9}),i=new bt({color:10848108,metalness:.05,roughness:.74}),r=new Ue({color:8257535}),a=new Ue({color:6550271}),o=new Ue({color:16740949}),l=new bt({color:4807528,metalness:.85,roughness:.27});j(s,se,t,[0,.1,0],[2.45,.34,2.2]),j(s,se,e,[0,.33,0],[1.9,.18,1.7]),j(s,se,l,[0,.42,.6],[1.75,.06,.28]),j(s,se,o,[0,.42,.72],[1.55,.025,.025]);for(let w of[-1,1])j(s,se,e,[w*.98,.56,.42],[.34,.55,.75],[0,0,w*-.12]),j(s,se,t,[w*.9,.48,-.45],[.38,.3,.4]),j(s,se,o,[w*.9,.62,-.25],[.2,.02,.02]);for(let w=0;w<4;w+=1)j(s,se,w%2?a:o,[-1.02+w*.68,.53,1.06],[.2,.025,.03]);let c=new Ze;c.position.set(0,.5,0),s.add(c);for(let w of[-1,1]){let H=j(c,ti,n,[w*.2,.28,0],[.16,.43,.18]);H.rotation.z=w*.06,j(c,se,t,[w*.2,.3,.18],[.27,.42,.1],[.1,0,0]),j(c,se,l,[w*.21,-.08,.08],[.4,.2,.76])}let h=new Ze;h.position.set(0,1.12,0),c.add(h),j(h,ti,n,[0,0,0],[.4,.4,.32]),j(h,se,e,[0,.17,.12],[.72,.55,.34],[.06,0,0]),j(h,se,t,[0,-.04,.28],[.88,.2,.18],[-.08,0,0]),j(h,se,a,[0,.31,.32],[.25,.035,.025]),j(h,se,l,[.35,.08,.29],[.15,.22,.07],[0,0,-.18]),j(h,se,o,[-.33,.12,.31],[.08,.14,.025]);for(let w of[-1,1]){let H=j(h,Nn,e,[w*.51,.27,.02],[.3,.23,.4]);H.rotation.z=w*-.22,j(h,se,a,[w*.51,.37,.18],[.12,.022,.02])}let u=new Ze;u.position.set(0,.82,.15),h.add(u),j(u,Nn,i,[0,0,0],[.27,.3,.26]),j(u,Nn,t,[0,.08,-.015],[.34,.27,.31]);let f=j(u,se,r,[0,.02,.265],[.4,.13,.04],[.04,0,0]);j(u,se,e,[0,-.11,.22],[.29,.13,.1]),j(u,se,t,[0,.2,0],[.22,.09,.22]),j(u,se,o,[.2,.12,.05],[.035,.07,.035]);let p=j(u,Ft,l,[.17,.34,-.06],[.012,.23,.012],[0,0,-.24]);j(u,Nn,o,[.22,.46,-.06],[.028,.028,.028]);let g=dn(8257535,.62,.42);g.position.set(0,.02,.31),u.add(g),j(h,se,t,[0,.05,-.34],[.56,.6,.24]),j(h,se,e,[.37,.04,-.4],[.14,.3,.12]),j(h,se,a,[.37,-.02,-.46],[.1,.025,.02]);let x=dn(5565183,.8,.3);x.position.set(0,.18,.4),h.add(x);let m=new Ze;m.position.set(.14,1.88,.26),c.add(m),j(m,Ft,t,[0,-.1,0],[.36,.14,.36]),j(m,Ft,l,[0,.03,0],[.26,.08,.26]),j(m,Tn,a,[0,-.04,.02],[.3,.3,.3],[Math.PI/2,0,0]);let d=new bt({color:11635271,metalness:.8,roughness:.32});for(let w=0;w<6;w+=1)j(m,Ft,d,[.45+w*.01,-.02-w*.035,-.16+w*.01],[.035,.1,.035],[.2,0,.25]);for(let w of[-1,1]){let H=new Ze;H.position.set(w*.32,.04,.02),m.add(H);let W=j(H,ti,n,[w*.16,.18,.08],[.13,.24,.13],[0,0,w*-.7]);W.rotation.x=.2,j(H,se,e,[w*.32,.33,.11],[.22,.17,.22],[0,0,w*-.15]);let ee=j(H,ti,i,[w*.28,.48,.18],[.11,.22,.11],[.1,0,w*-.15]);ee.rotation.x=.4,j(H,se,t,[w*.3,.54,.27],[.18,.1,.18])}let b={},T={},S={};function R(w){let H=new Ze,W=jn[w].color,ee=new Ue({color:W,transparent:!0,opacity:.95}),k=new Ue({color:W,transparent:!0,opacity:.5,blending:Qe,depthWrite:!1});m.add(H),H.visible=!1,b[w]=H;let Z=new wt;Z.position.set(0,1.86,.08),H.add(Z),T[w]=Z;let le=dn(W,.85,0);return le.position.copy(Z.position),le.visible=!1,H.add(le),S[w]=le,{variant:H,color:W,glowMat:ee,lightMat:k,muzzle:Z,flash:le}}{let{variant:w,color:H,glowMat:W,lightMat:ee}=R("vulcan");j(w,se,t,[0,.42,0],[.56,.65,.46]),j(w,se,e,[0,.44,.17],[.4,.5,.2]),j(w,se,l,[0,.85,0],[.3,.22,.3]),j(w,se,a,[0,.68,.27],[.18,.03,.025]),j(w,Ft,l,[.42,.38,-.02],[.17,.2,.17],[0,0,Math.PI/2]),j(w,Tn,W,[.57,.38,-.02],[.15,.15,.15],[0,Math.PI/2,0]),j(w,Ft,l,[-.38,.47,.05],[.06,.32,.06],[0,0,Math.PI/2]),j(w,se,o,[-.4,.65,.18],[.1,.025,.02]);let k=new Ze;k.position.set(0,.95,0),w.add(k);let Z=new bt({color:5004648,metalness:.95,roughness:.2});for(let ve=0;ve<6;ve+=1){let Ae=ve/6*Math.PI*2;j(k,Ft,Z,[Math.cos(Ae)*.13,.47,Math.sin(Ae)*.13],[.035,.95,.035])}j(k,Tn,l,[0,.12,0],[.22,.22,.22],[Math.PI/2,0,0]),j(k,Tn,l,[0,.85,0],[.2,.2,.2],[Math.PI/2,0,0]),j(k,Tn,W,[0,.93,0],[.17,.17,.17],[Math.PI/2,0,0]),j(k,se,ee,[0,.45,.24],[.06,.45,.02]),w.userData.spin=k;let le=dn(H,1.15,.22);le.position.set(0,.55,.42),w.add(le)}{let{variant:w,color:H,glowMat:W,lightMat:ee}=R("pyro");j(w,se,t,[0,.4,0],[.64,.58,.5]),j(w,se,e,[0,.47,.2],[.46,.4,.18]),j(w,se,o,[0,.7,.28],[.2,.03,.025]),j(w,Ft,l,[0,.98,0],[.13,.52,.13]),j(w,Ft,new bt({color:14180906,emissive:8922112,emissiveIntensity:.5,metalness:.6,roughness:.35}),[0,1.37,0],[.17,.42,.17]),j(w,Tn,W,[0,1.57,0],[.24,.24,.24],[Math.PI/2,0,0]),j(w,se,ee,[0,1.58,.2],[.3,.02,.02]);for(let le of[-1,1])j(w,ti,new bt({color:6370083,metalness:.65,roughness:.4}),[le*.38,.7,-.1],[.14,.24,.14],[le*.1,0,le*-.1]),j(w,Tn,W,[le*.38,.84,-.1],[.14,.14,.14],[Math.PI/2,0,0]);j(w,Ft,l,[-.48,.45,.05],[.06,.36,.06],[0,0,Math.PI/2]);let k=dn(16742950,.55,.7);k.position.set(0,1.78,.1),w.add(k);let Z=dn(16738850,1,.24);Z.position.set(0,.9,.42),w.add(Z)}{let{variant:w,color:H,glowMat:W,lightMat:ee}=R("rail");j(w,se,t,[0,.42,0],[.66,.62,.5]),j(w,se,e,[0,.5,.2],[.48,.45,.18]),j(w,se,l,[0,1.25,0],[.17,1.1,.22]);for(let Z of[-1,1])j(w,se,l,[Z*.11,1.3,0],[.045,1.3,.16]),j(w,se,ee,[Z*.14,1.3,.09],[.018,1.05,.02]),j(w,se,e,[Z*.26,1,0],[.15,.55,.18],[0,0,Z*.06]);for(let Z=0;Z<4;Z+=1)j(w,Tn,W,[0,.92+Z*.24,0],[.24,.24,.24],[Math.PI/2,0,0]);j(w,se,t,[.43,.65,-.08],[.3,.3,.28]),j(w,se,W,[.43,.65,.08],[.16,.08,.02]),j(w,Ft,l,[-.42,.45,0],[.06,.4,.06],[0,0,Math.PI/2]);let k=dn(H,1.1,.22);k.position.set(0,.7,.42),w.add(k)}{let{variant:w,color:H,glowMat:W,lightMat:ee}=R("arc");j(w,se,t,[0,.4,0],[.6,.56,.46]),j(w,se,e,[0,.48,.18],[.42,.4,.17]),j(w,se,ee,[0,.62,.28],[.22,.03,.02]),j(w,Ft,l,[0,1.06,0],[.07,.7,.07]);for(let Z=0;Z<3;Z+=1)j(w,Tn,W,[0,.87+Z*.24,0],[.23-Z*.03,.23-Z*.03,.23-Z*.03],[Math.PI/2,0,0]);for(let Z of[-1,1])j(w,Nn,W,[Z*.29,1.15,0],[.09,.09,.09]),j(w,Ft,l,[Z*.29,.72,0],[.035,.42,.035],[0,0,Z*.28]),j(w,Tn,l,[Z*.36,.62,0],[.1,.1,.1],[Math.PI/2,0,0]);j(w,Nn,W,[0,1.43,0],[.12,.12,.12]),j(w,Ft,l,[-.42,.44,0],[.06,.4,.06],[0,0,Math.PI/2]);let k=dn(H,1,.24);k.position.set(0,.8,.4),w.add(k)}{let{variant:w,color:H,glowMat:W,lightMat:ee}=R("plasma");j(w,se,t,[0,.4,0],[.68,.6,.5]),j(w,se,e,[0,.45,.21],[.48,.4,.18]),j(w,Ft,l,[0,.98,0],[.21,.58,.21]),j(w,Ft,new bt({color:2309413,emissive:1989664,emissiveIntensity:.8,metalness:.6,roughness:.35}),[0,1.3,0],[.26,.45,.26]),j(w,Tn,W,[0,1.5,0],[.3,.3,.3],[Math.PI/2,0,0]);for(let Z=0;Z<3;Z+=1)j(w,se,e,[0,.93+Z*.18,0],[.5,.04,.5],[0,0,0]);j(w,Nn,W,[0,1.19,0],[.14,.14,.14]);for(let Z of[-1,1])j(w,se,ee,[Z*.27,1.15,.18],[.025,.35,.02]);j(w,Ft,l,[-.42,.44,0],[.06,.4,.06],[0,0,Math.PI/2]);let k=dn(H,1.15,.26);k.position.set(0,.85,.12),w.add(k)}let A="vulcan",P=0,N=0,y=0,M=0;function D(w){b[w]&&(Object.values(b).forEach(H=>{H.visible=!1}),Object.values(S).forEach(H=>{H.visible=!1}),b[w].visible=!0,A=w,P=0)}function O(w=1){let H=S[A];H&&(H.visible=!0,H.material.opacity=Math.min(1,.55+w*.4),H.scale.setScalar(.7+w*.55),y=0,M=.065+w*.03,N=Math.min(1,N+.45+w*.4),P=Math.min(28,P+8))}function X(w,H,W,ee,k){let Z=gr.clamp(W,-1.34,1.34);m.rotation.z=-Z,m.rotation.x=-.03,c.rotation.z=Z*.075,u.rotation.z=Z*.06+Math.sin(H*1.2)*.006,h.position.y=1.12+Math.sin(H*1.8)*.008,N=Math.max(0,N-w*7.5),P=Math.max(0,P-w*17);let le=b[A];le&&(le.position.y=-N*.055);let ve=le?.userData.spin;if(ve&&(ve.rotation.y+=(P+(ee?5:0))*w),y<M){y+=w;let Ae=S[A];if(Ae){let rt=1-y/M;Ae.material.opacity=Math.max(0,rt),Ae.scale.setScalar((.7+(1-rt)*1.4)*.8)}}else{let Ae=S[A];Ae&&(Ae.visible=!1)}f.material.color.setHex(k?7337215:3889248),k&&f.material.color.multiplyScalar(1+Math.sin(H*4)*.035)}return D("vulcan"),{root:s,torso:h,head:u,turret:m,muzzles:T,activeWeapon:()=>A,setWeapon:D,fireFlash:O,update:X,muzzleFlashLight:null}}var Ug={walker:6780755,runner:9728588,brute:5136457,spitter:5797203,boss:6041654},Ng={walker:2962493,runner:5651756,brute:2829356,spitter:3228730,boss:2891814},Fg={walker:16733750,runner:16757310,brute:16727345,spitter:10485586,boss:16722751},Un=1843745,ei=3949640,fc=new bt({vertexColors:!0,roughness:.86,metalness:.08}),Bu=new Ue({vertexColors:!0,toneMapped:!1}),pc=new Map,Co=new Pe;function qe(s,e,t,n=[0,0,0],i=[1,1,1],r=[0,0,0]){let a=e.clone();a.index&&(a=a.toNonIndexed()),a.deleteAttribute("uv");let o=new at().compose(new L(...n),new _n().setFromEuler(new en(...r)),new L(...i));a.applyMatrix4(o),Co.setHex(t);let l=a.attributes.position.count,c=new Float32Array(l*3);for(let h=0;h<l;h+=1)c[h*3]=Co.r,c[h*3+1]=Co.g,c[h*3+2]=Co.b;a.setAttribute("color",new ot(c,3)),s.push(a)}function Oi(s){if(!s.length)return new nt;let e=Eo(s,!1)||s[0].clone();return e.computeBoundingSphere(),s.forEach(t=>t.dispose()),e}var Ou=new Map;function Bg(s=.9){let e=Ou.get(s);e||(e={bgGeometry:new Rt(s,.075),fillGeometry:new Rt(s-.03,.042),bgMaterial:new Ue({color:593166,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1}),fillMaterial:new Ue({color:16728912,transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1})},Ou.set(s,e));let t=new Ze,n=new de(e.bgGeometry,e.bgMaterial);n.renderOrder=20;let i=new de(e.fillGeometry,e.fillMaterial);return i.position.z=.003,i.renderOrder=21,t.add(n,i),t.userData.fill=i,t.userData.width=s,t.visible=!1,t}function Og(s){if(pc.has(s))return pc.get(s);let e=Ug[s],t=Ng[s],n=Fg[s],i=s==="runner",r=s==="brute",a=s==="spitter",o=s==="boss",l=[],c=[],h=[],u=[],f=[],p=[];if(qe(l,ti,e,[0,.08,0],[.29,.36,.24]),qe(l,se,t,[0,.1,.05],[.55,.48,.34],[.03,0,0]),qe(l,se,Un,[0,-.04,.19],[.48,.18,.14],[-.08,0,0]),qe(l,se,t,[.27,-.23,.06],[.15,.3,.1],[.1,.2,-.2]),qe(l,se,Un,[-.24,-.21,.04],[.1,.24,.1],[.06,-.1,.14]),qe(l,se,Un,[0,-.35,0],[.4,.18,.28]),qe(l,Nn,e,[0,.82,.15],[.25,.27,.24]),qe(l,se,Un,[0,.63,.22],[.3,.12,.22],[.05,0,0]),qe(l,se,e,[0,.6,.31],[.22,.075,.14],[.11,0,0]),qe(l,se,Un,[.025,.705,.38],[.2,.025,.02],[0,0,.08]),qe(l,se,1120022,[-.09,.845,.372],[.12,.072,.018]),qe(l,se,1120022,[.09,.845,.372],[.12,.072,.018]),qe(c,se,n,[-.09,.845,.382],[.092,.05,.028]),qe(c,se,n,[.09,.845,.382],[.092,.05,.028]),i)qe(l,se,Un,[0,1,.02],[.36,.08,.2],[.12,0,.18]),qe(l,se,10115890,[0,.74,.13],[.38,.09,.32],[.03,0,0]);else if(o){qe(l,se,ei,[0,.17,.2],[.82,.32,.14]),qe(l,se,ei,[-.46,.38,0],[.4,.26,.42],[0,0,.2]),qe(l,se,ei,[.46,.38,0],[.4,.26,.42],[0,0,-.2]),qe(l,se,ei,[0,1.1,.03],[.45,.09,.28]),qe(l,new di(.1,.55,6),3024166,[-.28,1.06,.03],[1,1,1],[.2,0,.65]),qe(l,new di(.1,.55,6),3024166,[.28,1.06,.03],[1,1,1],[.2,0,-.65]);for(let m=0;m<4;m+=1)qe(c,se,n,[0,.01+m*.09,.33],[.18+m*.02,.025,.02])}else a?(qe(l,se,Un,[0,.45,.09],[.36,.16,.3],[.05,0,0]),qe(c,Nn,n,[0,.46,.32],[.1,.08,.05])):r?(qe(l,se,ei,[0,.2,.21],[.62,.28,.1],[.03,0,0]),qe(l,se,ei,[-.37,.3,.02],[.24,.18,.3],[0,0,.15]),qe(l,se,ei,[.37,.3,.02],[.24,.18,.3],[0,0,-.15]),qe(c,se,n,[0,.13,.28],[.2,.05,.02])):qe(l,se,Un,[0,.99,-.01],[.28,.05,.2],[.15,0,-.05]);for(let m of[-1,1]){let d=m<0?h:u;qe(d,ti,e,[0,-.18,.11],[.085,.25,.09],[.35,0,m*.14]),qe(d,ti,e,[m*.04,-.45,.37],[.07,.19,.075],[1.35,0,m*.1]),qe(d,se,e,[m*.04,-.61,.5],[.13,.1,.18]),(r||o)&&(qe(d,se,ei,[m*.03,-.4,.23],[.19,.12,.2]),qe(d,se,Un,[m*.04,-.65,.56],[.055,.06,.09])),qe(d,se,t,[0,-.12,.02],[.19,.13,.16])}for(let m of[-1,1]){let d=m<0?f:p;qe(d,ti,t,[0,-.22,0],[.11,.24,.12],[0,0,m*.03]),qe(d,se,Un,[m*.02,-.46,.08],[.22,.2,.33],[.1,0,0]),(r||o)&&qe(d,se,ei,[0,-.3,.06],[.18,.14,.16])}let g=null;if(a){let m=[];qe(m,Nn,n,[0,0,0],[.2,.22,.13]),g=Oi(m)}let x={body:Oi(l),eyes:Oi(c),armL:Oi(h),armR:Oi(u),legL:Oi(f),legR:Oi(p),sac:g};return pc.set(s,x),x}function gc(s){let e=yr[s],t=Og(s),n=new Ze,i=new Ze;n.add(i);let r=s==="runner",a=s==="boss",o=a?1.05:r?.9:1,l=new de(Dg,Lg);l.position.set(0,.03,-.2),l.scale.set(a?2.4:1,a?1.8:1,1),n.add(l);let c=new Ze;c.position.set(0,.98,0),c.userData.baseY=.98,i.add(c);let h=new de(t.body,fc);c.add(h);let u=new de(t.eyes,Bu);if(u.renderOrder=3,c.add(u),t.sac){let x=new de(t.sac,Bu);x.position.set(0,.15,.23),x.renderOrder=3,c.add(x),c.userData.sac=x}let f=[];for(let x of[-1,1]){let m=new Ze;m.position.set(x*.36,.3,.02),c.add(m);let d=new de(x<0?t.armL:t.armR,fc);m.add(d),f.push({shoulder:m,elbow:m})}let p=[];for(let x of[-1,1]){let m=new Ze;m.position.set(x*.16,.68,0),i.add(m);let d=new de(x<0?t.legL:t.legR,fc);m.add(d),p.push(m)}if(a){let x=new hi(new Zn({map:mc,color:16722751,transparent:!0,opacity:.19,blending:Qe,depthWrite:!1}));x.scale.set(3.1,3.1,1),x.position.set(0,1,-.25),n.add(x)}let g=Bg(a?2.1:1);return g.position.set(0,a?2.7:2,.2),n.add(g),n.scale.setScalar(e.scale*o),n.userData.healthBar=g,n.userData.rig=i,{group:n,rig:i,legs:p,arms:f,head:c,torso:c,healthBar:g,type:e,updateHealth(x,m){if(s==="walker"||s==="runner"){g.visible=!1;return}g.visible=!0;let d=Math.max(0,x/m);g.userData.fill.scale.x=d,g.userData.fill.position.x=-(g.userData.width*(1-d))/2}}}function xc(s,e,t,n={}){let{type:i}=s,r=t*(i.speed*2.2+1.2),a=n.attacking,o=!a,l=n.phase||0,c=a?Math.max(0,Math.sin(t*6.5+l)):0;if(s.legs.forEach((h,u)=>{h.rotation.x=o?Math.sin(r+l+u*Math.PI)*.5:Math.sin(t*5+u*2)*.08}),s.arms.forEach((h,u)=>{let f=Math.sin(r+l+u*Math.PI+.8)*.25;h.shoulder.rotation.x=(o?f:-.35-c*.5)+(i.id==="runner"?-.3:0),h.shoulder.rotation.z=(u===0?-1:1)*(o?.02:.12),h.elbow.rotation.x=0}),s.torso.rotation.z=Math.sin(r*.5+l)*.035,s.torso.rotation.x=i.id==="runner"?-.2:i.id==="brute"?-.08:0,s.torso.position.y=(s.torso.userData.baseY||.98)+Math.sin(r*.7+l)*.015,s.torso.userData.sac){let h=s.torso.userData.sac,u=1+Math.sin(t*3+l)*.08;h.scale.set(u,u,u)}}function _c(s,e){let t=xi[s.rarity]||xi.common,n=new Ze,i=new Ze;n.add(i);let r=new bt({color:1383717,metalness:.82,roughness:.28,emissive:new Pe(t.color).multiplyScalar(.05),emissiveIntensity:.5}),a=new Ue({color:t.color,transparent:!0,opacity:.88}),o=new bt({color:2831680,metalness:.7,roughness:.35});j(i,se,r,[0,0,0],[1.2,1.08,.86]),j(i,se,o,[0,.49,0],[1.28,.08,.94]),j(i,se,o,[0,-.45,0],[1.26,.07,.92]);for(let N of[-1,1])j(i,se,a,[N*.555,0,.44],[.035,.88,.03]),j(i,se,a,[N*.48,.36,.44],[.12,.035,.03]);j(i,se,a,[0,.04,.455],[.7,.035,.03]),j(i,se,a,[0,-.38,.455],[.5,.02,.03]),j(i,se,o,[.45,.2,.47],[.18,.16,.04]),j(i,se,a,[.45,.16,.49],[.1,.025,.02]);let l=new js(new sr(se),new tn({color:t.color,transparent:!0,opacity:.42}));l.scale.set(1.2,1.08,.86),i.add(l);let c=new de(new nn(.94,.018,6,42),new Ue({color:t.color,transparent:!0,opacity:.55,blending:Qe,depthWrite:!1}));c.position.z=.05,c.rotation.x=.06,n.add(c);let h=new de(new nn(.76,.01,6,32),new Ue({color:t.color,transparent:!0,opacity:.3,blending:Qe,depthWrite:!1}));h.position.z=-.1,n.add(h);let u=dn(t.color,2.2,.22);u.position.set(0,0,-.3),n.add(u);let f=dc({name:s.name,rarity:t.name,color:t.css,hp:e,tag:"\u51FB\u7834\u593A\u53D6"}),p=new At(f);p.colorSpace=je,p.minFilter=jt;let g=new de(new Rt(2.08,1.22),new Ue({map:p,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));g.position.set(0,1.48,.7),g.renderOrder=30,n.add(g);let x=new de(new Mn(.012,.012,7,4),new Ue({color:t.color,transparent:!0,opacity:.12,blending:Qe,depthWrite:!1}));x.position.set(0,4.8,-.35),n.add(x);let m=0,d=!1,b=0,T=!1,S=e;function R(){let N=dc({name:s.name,rarity:t.name,color:t.css,hp:Math.max(0,Math.ceil(e)),tag:"\u51FB\u7834\u593A\u53D6",flash:d});p.image=N,p.needsUpdate=!0,d=!1}function A(N){e=Math.max(0,N),e!==S&&(S=e,T=!0,d=!0,m=1,r.emissiveIntensity=2.6)}function P(N,y){i.rotation.y=Math.sin(y*.6)*.1,i.position.y=Math.sin(y*1.7)*.03,c.rotation.z=y*.35,h.rotation.z=-y*.5,c.scale.setScalar(1+Math.sin(y*2.2)*.035),u.material.opacity=.18+Math.sin(y*1.8)*.06,m>0&&(m=Math.max(0,m-N*5),r.emissiveIntensity=.5+m*2.2),b-=N,T&&b<=0&&(T=!1,b=.06,R()),g.position.y=1.48+Math.sin(y*1.6)*.025}return{group:n,label:g,labelTexture:p,baseMat:r,ring:c,hp:e,setHp:A,update:P,reward:s,rarity:t}}function ku(){let s=new Ze,e=new bt({color:2239800,metalness:.75,roughness:.3}),t=new Ue({color:6615551});j(s,new $e(.38,.11,.24),e,[0,0,0]),j(s,new $e(.2,.05,.18),e,[0,.07,.02]),j(s,new $e(.1,.03,.04),t,[0,.02,.15]);let n=[];for(let a of[-1,1]){j(s,new $e(.6,.025,.035),e,[a*.33,.01,0]);let o=new Ze;o.position.set(a*.58,.04,0),s.add(o),j(o,new Mn(.13,.13,.015,12),new Ue({color:3754326,transparent:!0,opacity:.35}),[0,0,0]);for(let l=0;l<2;l+=1){let c=j(o,new $e(.25,.006,.025),e,[0,.01,0]);c.rotation.y=l*Math.PI/2}n.push(o)}let i=dn(6680575,.22,.85);i.position.set(0,.02,.2),s.add(i);let r=dn(6680575,.7,.22);return r.position.set(0,-.08,0),s.add(r),{group:s,rotors:n}}function Gu(){let s=new Ze,e=new Ue({color:7861503,transparent:!0,opacity:.72,depthTest:!1,depthWrite:!1,blending:Qe,toneMapped:!1}),t=new de(new nn(.35,.012,6,36),e);t.renderOrder=50,s.add(t);let n=new de(new nn(.16,.008,5,24),e);n.renderOrder=50,s.add(n);let i=new de(new ir(.028,10),e);i.renderOrder=51,s.add(i);let r=new Rt(.12,.022);for(let a=0;a<4;a+=1){let o=new de(r,e),l=a*Math.PI/2;o.position.set(Math.cos(l)*.46,Math.sin(l)*.46,0),o.rotation.z=l,o.renderOrder=50,s.add(o)}return s.renderOrder=50,{group:s,material:e,ring:t,inner:n,dot:i}}var Io=new Pe,Hg=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uProjectionScale;

  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = max(1.0, aSize * uProjectionScale / max(1.0, -mvPosition.z));
  }
`,zg=`
  uniform sampler2D uMap;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    float alpha = tex.a * vAlpha;
    if (alpha < 0.006) discard;
    gl_FragColor = vec4(vColor * tex.rgb, alpha);
  }
`,vr=class{constructor(e,{max:t=700,texture:n,blending:i=Qe,depthWrite:r=!1}={}){this.max=t,this.scene=e,this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*3),this.sizes=new Float32Array(t),this.alphas=new Float32Array(t),this.velocities=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.sizeStart=new Float32Array(t),this.sizeEnd=new Float32Array(t),this.drag=new Float32Array(t),this.gravity=new Float32Array(t),this.cursor=0,this.active=0;let a=new nt;a.setAttribute("position",new ot(this.positions,3).setUsage(rn)),a.setAttribute("aColor",new ot(this.colors,3).setUsage(rn)),a.setAttribute("aSize",new ot(this.sizes,1).setUsage(rn)),a.setAttribute("aAlpha",new ot(this.alphas,1).setUsage(rn));let o=new Ht({uniforms:{uMap:{value:n},uProjectionScale:{value:800}},vertexShader:Hg,fragmentShader:zg,transparent:!0,depthWrite:r,depthTest:!0,blending:i});this.geometry=a,this.material=o,this.points=new ui(a,o),this.points.frustumCulled=!1,this.points.renderOrder=14,this.scene.add(this.points)}setProjectionScale(e){this.material.uniforms.uProjectionScale.value=e}spawn({x:e=0,y:t=0,z:n=0,vx:i=0,vy:r=0,vz:a=0,life:o=.6,size:l=.12,endScale:c=.2,color:h=16777215,gravity:u=0,drag:f=0,alpha:p=1}={}){let g=this.cursor;this.cursor=(this.cursor+1)%this.max;let x=g*3;return this.positions[x]=e,this.positions[x+1]=t,this.positions[x+2]=n,this.velocities[x]=i,this.velocities[x+1]=r,this.velocities[x+2]=a,Io.set(h),this.colors[x]=Io.r,this.colors[x+1]=Io.g,this.colors[x+2]=Io.b,this.sizes[g]=l,this.alphas[g]=p,this.life[g]=o,this.maxLife[g]=o,this.sizeStart[g]=l,this.sizeEnd[g]=c,this.drag[g]=f,this.gravity[g]=u,this.active=Math.min(this.max,this.active+1),g}burst(e,t,n,i,r={}){let{speed:a=3,spread:o=Math.PI*2,direction:l=0,life:c=.5,size:h=.12,endScale:u=.1,color:f=16777215,colors:p=null,gravity:g=0,drag:x=3,alpha:m=1,zSpread:d=.5}=r;for(let b=0;b<i;b+=1){let T=l+(Math.random()-.5)*o,S=a*(.35+Math.random()*.8),R=p?p[Math.floor(Math.random()*p.length)]:f;this.spawn({x:e+(Math.random()-.5)*.1,y:t+(Math.random()-.5)*.1,z:n+(Math.random()-.5)*d,vx:Math.cos(T)*S,vy:Math.sin(T)*S,vz:(Math.random()-.5)*S*.4,life:c*(.55+Math.random()*.8),size:h*(.55+Math.random()*.8),endScale:u,color:R,gravity:g,drag:x,alpha:m})}}update(e){if(e<=0||this.active<=0)return;let t=!1;for(let n=0;n<this.max;n+=1){if(this.life[n]<=0)continue;t=!0,this.life[n]-=e;let i=n*3;if(this.life[n]<=0){this.alphas[n]=0,this.sizes[n]=0;continue}let r=Math.max(0,1-this.drag[n]*e);this.velocities[i]*=r,this.velocities[i+1]=this.velocities[i+1]*r-this.gravity[n]*e,this.velocities[i+2]*=r,this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e;let a=1-this.life[n]/this.maxLife[n];this.sizes[n]=this.sizeStart[n]+(this.sizeEnd[n]-this.sizeStart[n])*a,this.alphas[n]=(1-a)*(1-a*.18)}t&&(this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0)}clear(){this.alphas.fill(0),this.sizes.fill(0),this.life.fill(0),this.active=0,this.cursor=0,this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0}};var kg=new L(0,1,0),yt=new wt,Po=new L,Lo=class{constructor(e,t=170){this.max=t;let n=new $e(.048,1,.048),i=new Ue({color:16777215,transparent:!0,opacity:1,blending:Qe,depthWrite:!1,toneMapped:!1});this.mesh=new fs(n,i,t),this.mesh.instanceMatrix.setUsage(rn),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.mesh.count=t,this.color=new Pe;for(let r=0;r<t;r+=1)this.mesh.setColorAt(r,this.color.setHex(16777215)),yt.position.set(0,0,-100),yt.scale.setScalar(0),yt.updateMatrix(),this.mesh.setMatrixAt(r,yt.matrix);this.mesh.instanceColor.needsUpdate=!0,e.add(this.mesh)}update(e){let t=0;for(let n=0;n<e.length&&t<this.max;n+=1){let i=e[n];if(!i.active||i.kind!=="bullet")continue;Po.set(i.vx,i.vy,0).normalize();let r=i.tracerLength||.55;yt.position.set(i.x-Po.x*r*.5,i.y-Po.y*r*.5,i.z),yt.quaternion.setFromUnitVectors(kg,Po),yt.scale.set(1,r,1),yt.updateMatrix(),this.mesh.setMatrixAt(t,yt.matrix),this.mesh.setColorAt(t,this.color.setHex(i.tracerColor||i.color||10352895)),t+=1}for(let n=t;n<this.max;n+=1)yt.position.set(0,0,-100),yt.scale.setScalar(0),yt.updateMatrix(),this.mesh.setMatrixAt(n,yt.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Do=class{constructor(e,t=48){this.max=t;let n=new $n(1,10,8),i=new Ue({color:16777215,transparent:!0,opacity:.9,blending:Qe,depthWrite:!1,toneMapped:!1});this.mesh=new fs(n,i,t),this.mesh.instanceMatrix.setUsage(rn),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12,this.mesh.count=t,this.color=new Pe;for(let r=0;r<t;r+=1)this.mesh.setColorAt(r,this.color.setHex(16777215)),yt.position.set(0,0,-100),yt.scale.setScalar(0),yt.updateMatrix(),this.mesh.setMatrixAt(r,yt.matrix);this.mesh.instanceColor.needsUpdate=!0,e.add(this.mesh)}update(e){let t=0;for(let n of e)for(let i=0;i<n.length&&t<this.max;i+=1){let r=n[i];if(!r.active||r.kind!=="orb"&&r.kind!=="acid")continue;let a=r.radius||.2;yt.position.set(r.x,r.y,r.z),yt.scale.setScalar(a),yt.quaternion.identity(),yt.updateMatrix(),this.mesh.setMatrixAt(t,yt.matrix),this.mesh.setColorAt(t,this.color.setHex(r.color||10223459)),t+=1}for(let n=t;n<this.max;n+=1)yt.position.set(0,0,-100),yt.scale.setScalar(0),yt.updateMatrix(),this.mesh.setMatrixAt(n,yt.matrix);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Uo=class{constructor(e,t=32){this.max=t;let n=new At(Du(48,256));n.colorSpace=je,this.items=[];for(let i=0;i<t;i+=1){let r=new Ue({map:n,transparent:!0,opacity:0,blending:Qe,depthWrite:!1,toneMapped:!1,side:Xt}),a=new de(new Rt(1,1),r);a.visible=!1,a.renderOrder=13,e.add(a),this.items.push({mesh:a,material:r,life:0,maxLife:1,baseOpacity:1,baseWidth:1})}this.cursor=0}fire(e,t,n,i,r,a=.15,o=.18,l=1,c=.75){let h=null;for(let g=0;g<this.max;g+=1){let x=this.items[(this.cursor+g)%this.max];if(x.life<=0){h=x;break}}h||(h=this.items[this.cursor]),this.cursor=(this.cursor+1)%this.max;let u=n-e,f=i-t,p=Math.max(.1,Math.hypot(u,f));h.mesh.position.set((e+n)/2,(t+i)/2,c),h.mesh.rotation.z=Math.atan2(f,u)-Math.PI/2,h.mesh.scale.set(a,p,1),h.mesh.visible=!0,h.material.color.setHex(r),h.material.opacity=l,h.life=o,h.maxLife=o,h.baseOpacity=l,h.baseWidth=a}update(e){for(let t of this.items){if(t.life<=0)continue;t.life-=e;let n=Math.max(0,t.life/t.maxLife);t.material.opacity=t.baseOpacity*n,t.mesh.scale.x=t.baseWidth*(.6+n*.4),t.life<=0&&(t.mesh.visible=!1)}}},No=class{constructor(e,t=30){this.max=t,this.items=[];for(let n=0;n<t;n+=1){let i=new Float32Array(78),r=new nt;r.setAttribute("position",new ot(i,3).setUsage(rn)),r.setDrawRange(0,0);let a=new tn({color:12884991,transparent:!0,opacity:0,blending:Qe,depthWrite:!1,toneMapped:!1}),o=new vn(r,a);o.frustumCulled=!1,o.renderOrder=14,o.visible=!1,e.add(o),this.items.push({line:o,geometry:r,material:a,life:0,maxLife:1,baseOpacity:1})}this.cursor=0}fire(e,t=12884991,n=.16,i=.85){if(!e||e.length<2)return;let r=null;for(let l=0;l<this.max;l+=1){let c=this.items[(this.cursor+l)%this.max];if(c.life<=0){r=c;break}}r||(r=this.items[this.cursor]),this.cursor=(this.cursor+1)%this.max;let a=r.geometry.attributes.position.array,o=Math.min(e.length,26);for(let l=0;l<o;l+=1)a[l*3]=e[l].x,a[l*3+1]=e[l].y,a[l*3+2]=.8;r.geometry.attributes.position.needsUpdate=!0,r.geometry.setDrawRange(0,o),r.material.color.setHex(t),r.material.opacity=i,r.life=n,r.maxLife=n,r.baseOpacity=i,r.line.visible=!0}update(e){for(let t of this.items)t.life<=0||(t.life-=e,t.material.opacity=t.baseOpacity*Math.max(0,t.life/t.maxLife),t.life<=0&&(t.line.visible=!1))}},Fo=class{constructor(e,t=18){this.items=[],this.cursor=0;let n=new rr(.7,1,64,1);for(let i=0;i<t;i+=1){let r=new Ue({color:16762714,transparent:!0,opacity:0,side:Xt,blending:Qe,depthWrite:!1,toneMapped:!1}),a=new de(n,r);a.visible=!1,a.renderOrder=15,e.add(a),this.items.push({mesh:a,material:r,life:0,maxLife:1,start:.2,end:3,opacity:1})}}fire(e,t,n,i,r=3,a=.4,o=.8,l=.25){let c=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,c.mesh.position.set(e,t,n),c.mesh.scale.setScalar(l),c.mesh.visible=!0,c.material.color.setHex(i),c.material.opacity=o,c.life=a,c.maxLife=a,c.start=l,c.end=r,c.opacity=o}update(e){for(let t of this.items){if(t.life<=0)continue;t.life-=e;let n=1-Math.max(0,t.life/t.maxLife),i=1-(1-n)**3,r=t.start+(t.end-t.start)*i;t.mesh.scale.setScalar(r),t.material.opacity=t.opacity*(1-n)**1.4,t.life<=0&&(t.mesh.visible=!1)}}};var yc=s=>440*2**((s-69)/12),Bo=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.sfxBus=null,this.noiseBuffer=null;try{this.muted=localStorage.getItem("dead-split-muted")==="1"}catch{this.muted=!1}this.musicPlaying=!1,this.musicGain=0,this.nextNote=0,this.step=0,this.lastShot=0,this.lastHit=0,this.lastFlameShot=0,this.flameLevel=0,this.flameGain=null,this.flameSource=null,this.started=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=18,t.ratio.value=8,t.attack.value=.003,t.release.value=.16,this.master.connect(t),t.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=.72,this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.noiseBuffer=this.ctx.createBuffer(1,this.ctx.sampleRate*1.2,this.ctx.sampleRate);let n=this.noiseBuffer.getChannelData(0);for(let i=0;i<n.length;i+=1)n[i]=Math.random()*2-1;this.createDrone(),this.createFlameLoop(),this.started=!0}createDrone(){let e=this.ctx.currentTime,t=this.ctx.createGain();t.gain.value=.04,t.connect(this.musicBus);let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=5,n.connect(t),[55,55.35,82.4].forEach((a,o)=>{let l=this.ctx.createOscillator();l.type=o===2?"triangle":"sawtooth",l.frequency.value=a;let c=this.ctx.createGain();c.gain.value=o===2?.1:.06,l.connect(c),c.connect(n),l.start(e)});let i=this.ctx.createOscillator();i.frequency.value=.07;let r=this.ctx.createGain();r.gain.value=55,i.connect(r),r.connect(n.frequency),i.start(e),this.droneBus=t}createFlameLoop(){let e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=900,t.Q.value=.7;let n=this.ctx.createGain();n.gain.value=0,e.connect(t),t.connect(n),n.connect(this.sfxBus),e.start(),this.flameGain=n,this.flameSource=e}setMuted(e){this.muted=e;try{localStorage.setItem("dead-split-muted",e?"1":"0")}catch{}if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.linearRampToValueAtTime(e?0:.72,t+.08),e&&this.flameGain&&(this.flameGain.gain.cancelScheduledValues(t),this.flameGain.gain.linearRampToValueAtTime(0,t+.05),this.flameLevel=0)}toggleMuted(){return this.setMuted(!this.muted),this.muted}makePanner(e=0){if(!this.ctx.createStereoPanner)return null;let t=this.ctx.createStereoPanner();return t.pan.value=Math.max(-1,Math.min(1,e)),t}noiseBurst({duration:e=.08,gain:t=.1,frequency:n=1800,q:i=.8,pan:r=0,type:a="bandpass"}={}){if(!this.ctx||this.muted)return;let o=this.ctx.currentTime,l=this.ctx.createBufferSource();l.buffer=this.noiseBuffer,l.playbackRate.value=.8+Math.random()*.5;let c=this.ctx.createBiquadFilter();c.type=a,c.frequency.value=n,c.Q.value=i;let h=this.ctx.createGain();h.gain.setValueAtTime(t,o),h.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(h);let u=this.makePanner(r);u?(h.connect(u),u.connect(this.sfxBus)):h.connect(this.sfxBus),l.start(o),l.stop(o+e+.02)}tone({freq:e=220,endFreq:t=e,duration:n=.08,gain:i=.08,type:r="sine",pan:a=0,delay:o=0}={}){if(!this.ctx||this.muted)return;let l=this.ctx.currentTime+o,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=r,c.frequency.setValueAtTime(e,l),t!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(20,t),l+n),h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(i,l+.006),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h);let u=this.makePanner(a);u?(h.connect(u),u.connect(this.sfxBus)):h.connect(this.sfxBus),c.start(l),c.stop(l+n+.03)}shoot(e="mg",t=0){if(!this.ctx)return;let n=this.ctx.currentTime;if(!(n-this.lastShot<.028))if(this.lastShot=n,e==="mg")this.noiseBurst({duration:.045,gain:.052,frequency:1900,q:.65,pan:t}),this.tone({freq:118,endFreq:54,duration:.055,gain:.032,type:"square",pan:t});else if(e==="flame"){if(n-this.lastFlameShot<.065)return;this.lastFlameShot=n,this.noiseBurst({duration:.16,gain:.03,frequency:780,q:.4,pan:t,type:"lowpass"}),this.setFlame(.16)}else e==="arc"?(this.noiseBurst({duration:.06,gain:.038,frequency:5200,q:.9,pan:t,type:"highpass"}),this.tone({freq:520,endFreq:190,duration:.06,gain:.024,type:"sawtooth",pan:t})):e==="rail"?(this.noiseBurst({duration:.3,gain:.12,frequency:420,q:.5,pan:t,type:"lowpass"}),this.tone({freq:1600,endFreq:64,duration:.38,gain:.08,type:"sawtooth",pan:t}),this.tone({freq:90,endFreq:40,duration:.5,gain:.11,type:"sine",pan:t})):e==="plasma"&&(this.tone({freq:180,endFreq:56,duration:.22,gain:.06,type:"triangle",pan:t}),this.noiseBurst({duration:.14,gain:.032,frequency:1600,q:1.4,pan:t}))}setFlame(e){if(!this.ctx||!this.flameGain||Math.abs(e-this.flameLevel)<.01)return;this.flameLevel=e;let t=this.ctx.currentTime;this.flameGain.gain.cancelScheduledValues(t),this.flameGain.gain.linearRampToValueAtTime(this.muted?0:e,t+.08)}hit(e=!1){if(!this.ctx)return;let t=this.ctx.currentTime;t-this.lastHit<.045||(this.lastHit=t,this.noiseBurst({duration:.025,gain:e?.025:.012,frequency:e?2600:1400,q:1.2}))}crateHit(){this.noiseBurst({duration:.035,gain:.018,frequency:2800,q:2}),this.tone({freq:740,endFreq:480,duration:.04,gain:.012,type:"triangle"})}kill(e="walker"){let t=e==="boss"?.18:.035;this.noiseBurst({duration:e==="boss"?.6:.13,gain:t,frequency:e==="boss"?300:620,q:.6,type:"lowpass"}),this.tone({freq:e==="boss"?90:170,endFreq:40,duration:e==="boss"?.8:.15,gain:t*.7,type:"sine"})}crateBreak(){this.noiseBurst({duration:.22,gain:.08,frequency:2100,q:.6}),[440,554,659,880].forEach((e,t)=>{this.tone({freq:e,duration:.32,gain:.035,type:"triangle",delay:t*.045})})}upgrade(e=0){let t=e>=2?523.25:392,n=[1,1.25,1.5,2];[0,1,2,3].forEach(i=>{this.tone({freq:t*n[i],duration:.55,gain:.035,type:"sine",delay:i*.06}),this.tone({freq:t*n[i]*2.01,duration:.4,gain:.012,type:"triangle",delay:i*.06})}),e>=3&&this.tone({freq:130,endFreq:52,duration:.9,gain:.09,type:"sine"})}damage(){this.noiseBurst({duration:.2,gain:.1,frequency:220,q:.4,type:"lowpass"}),this.tone({freq:72,endFreq:44,duration:.34,gain:.11,type:"sine"})}alert(){[0,.18].forEach((e,t)=>{this.tone({freq:t?660:880,duration:.18,gain:.045,type:"square",delay:e})}),this.noiseBurst({duration:.3,gain:.035,frequency:1200,q:.5})}shockwave(){this.tone({freq:140,endFreq:30,duration:.6,gain:.12,type:"sine"}),this.noiseBurst({duration:.45,gain:.07,frequency:520,q:.4,type:"lowpass"})}start(){this.init(),this.ctx&&(this.musicPlaying=!0,this.step=0,this.nextNote=this.ctx.currentTime+.08,this.tone({freq:110,endFreq:220,duration:.3,gain:.06,type:"sawtooth"}),this.tone({freq:220,endFreq:440,duration:.35,gain:.04,type:"triangle",delay:.08}))}stopMusic(){this.musicPlaying=!1,this.setFlame(0)}gameOver(){this.musicPlaying=!1,this.setFlame(0),[220,174,138,110].forEach((e,t)=>{this.tone({freq:e,duration:1.1,gain:.06,type:"sawtooth",delay:t*.2})}),this.noiseBurst({duration:1.2,gain:.05,frequency:300,q:.5,type:"lowpass"})}update(e=1){if(!this.ctx||!this.musicPlaying||this.muted)return;let t=this.ctx.currentTime,n=.24;this.nextNote<t-.5&&(this.nextNote=t+.05);let i=0;for(;this.nextNote<t+.12&&i<8;)this.scheduleStep(this.step,this.nextNote,e),this.step+=1,this.nextNote+=n,i+=1}scheduleStep(e,t,n=1){if(!this.ctx)return;let i=e%32,r=Math.max(0,t-this.ctx.currentTime);(i%8===0||i%16===11&&n>1.8)&&this.tone({freq:92,endFreq:40,duration:.22,gain:.065,type:"sine",delay:r}),i%4===2&&this.noiseBurst({duration:.035,gain:.012+n*.002,frequency:7e3,q:.8,type:"highpass"}),i%8===4&&this.noiseBurst({duration:.12,gain:.025,frequency:1800,q:.7});let o=[41,41,48,41,39,39,46,39];if(i%2===0){let l=o[i/2%o.length];this.tone({freq:yc(l),duration:.34,gain:.026,type:"triangle",delay:r})}n>2.5&&i%16===14&&this.tone({freq:yc(65),endFreq:yc(60),duration:.5,gain:.02,type:"sawtooth",delay:r})}};var Ce=s=>document.getElementById(s),Oo=Math.PI*2,Vu={walker:1.05,runner:.95,brute:1.35,spitter:1,boss:1.6},Ho=240,zo=40,Gg=52,vc=1,Mc=ke.defenseY;function Wu(s){let e=0;for(let n of s)e+=n.weight;let t=Math.random()*e;for(let n of s)if(t-=n.weight,t<=0)return n;return s[s.length-1]}function Xu(s,e,t,n,i,r,a){let o=t-s,l=n-e,c=o*o+l*l,h=0;c>1e-5&&(h=Zt(((i-s)*o+(r-e)*l)/c,0,1));let u=s+o*h,f=e+l*h;return(u-i)**2+(f-r)**2<=a*a?h:-1}function qu(s,e,t,n,i=.08){let r=[];for(let o=0;o<=7;o+=1){let l=o/7,c=o===0||o===7?0:(Math.random()-.5)*i*2;r.push({x:As(s,t,l)+c,y:As(e,n,l)+(Math.random()-.5)*i*2})}return r}var ko=class{constructor(e){this.canvas=e,this.stage=Ce("stage"),this.renderer=new So({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=je,this.renderer.toneMapping=La,this.renderer.toneMappingExposure=1.24,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(263947,1),this.scene=new Ks,this.scene.background=new Pe(263947),this.camera=new Nt(ke.fov,.5,.1,90),this.camera.position.set(0,ke.cameraY,ke.cameraZ),this.camera.lookAt(0,.15,0),this.cameraBase=new L(0,ke.cameraY,ke.cameraZ),this.cameraTarget=new L(0,.15,0),this.aimPlane=new hn(new L(0,0,1),-.4),this.raycaster=new cr,this.dom=this.collectDom(),this.audio=new Bo,this.time=0,this.lastFrame=performance.now(),this.state="menu",this.isTouch=window.matchMedia("(pointer: coarse)").matches,this.maxEnemies=this.isTouch?38:Gg,this.pixelRatioCap=this.isTouch?1.5:2,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.pixelRatioCap)),this.env=Fu(this.scene),this.gunner=zu(),this.scene.add(this.gunner.root);let t=new At(Bi(128));t.colorSpace=je;let n=new At(Ao(128));n.colorSpace=je,this.fx=new vr(this.scene,{max:900,texture:t,blending:Qe}),this.smoke=new vr(this.scene,{max:420,texture:n,blending:Xn}),this.tracers=new Lo(this.scene),this.orbs=new Do(this.scene),this.beams=new Uo(this.scene),this.arcs=new No(this.scene),this.rings=new Fo(this.scene),this.reticle=Gu(),this.reticle.group.visible=!1,this.scene.add(this.reticle.group);let i=new nt().setFromPoints([new L,new L]);this.aimLine=new vn(i,new tn({color:7337215,transparent:!0,opacity:.16,blending:Qe,depthWrite:!1,toneMapped:!1})),this.aimLine.visible=!1,this.aimLine.renderOrder=9,this.scene.add(this.aimLine),this.muzzleLight=new Pn(7533311,0,5.5,2),this.scene.add(this.muzzleLight),this.enemies=[],this.crates=[],this.drones=[],this.bullets=Array.from({length:Ho},()=>({active:!1,hits:new Set,x:0,y:0,z:0,px:0,py:0,vx:0,vy:0,age:0,life:1,radius:.2,damage:0,pierce:0,kind:"bullet",color:16777215,crit:!1,explosive:0,frost:0,burn:0,aoe:0,chain:0,emitT:0,tracerLength:.55})),this.bulletCursor=0,this.acids=Array.from({length:zo},()=>({active:!1,x:0,y:0,z:.7,vx:0,vy:0,damage:7,radius:.22,color:10223436,trailT:0})),this.acidCursor=0,this.pointer=new Be(0,.2),this.aimPoint=new Be(0,2),this.aimDesired=new Be(0,2),this.aimTarget=null,this.aimTargetType=null,this.hintTimer=0,this.input={left:!1,right:!1,dragging:!1,dragTargetX:0},this.player=this.newPlayer(),this.run=this.newRun(),this.boss=null,this.pendingBoss=0,this.bossCooldownLevel=0,this.spawnTimer=.8,this.crateTimer=3,this.hordeTimer=14,this.shockTimer=8,this.fireTimer=.2,this.isFiring=!1,this.damageFlash=0,this.shakeAmp=0,this.lastDamageSound=0,this.lastHitSound=0,this.hudTimer=0,this.menuGroup=null,this.menuEnemies=[],this.menuCrate=null,this.overlayTimer=null,this.turretWorld=new L,this.muzzleWorld=new L,this.tempVec=new L,this.tempVec2=new L,this.best=this.loadBest(),this.rebuildChips(),this.updateMuteButton(),this.updateBestLabels(),this.bindEvents(),this.resize(),this.setupMenuScene(),this.updateHud(!0),this.dom.boot.classList.add("done"),this.renderer.setAnimationLoop(r=>this.tick(r)),requestAnimationFrame(()=>{setTimeout(()=>this.dom.boot.classList.add("done"),220)})}collectDom(){return{stage:this.stage,boot:Ce("boot"),hud:Ce("hud"),startScreen:Ce("screen-start"),overScreen:Ce("screen-over"),pauseScreen:Ce("screen-pause"),startBtn:Ce("start-btn"),restartBtn:Ce("restart-btn"),resumeBtn:Ce("resume-btn"),quitBtn:Ce("quit-btn"),pauseBtn:Ce("pause-btn"),muteBtn:Ce("mute-btn"),menuMute:Ce("menu-mute"),armorNum:Ce("armor-num"),armorFill:Ce("armor-fill"),armorMeter:document.querySelector(".armor-meter"),scoreNum:Ce("score-num"),timeNum:Ce("time-num"),killsNum:Ce("kills-num"),threatNum:Ce("threat-num"),threatFill:Ce("threat-fill"),threatKills:Ce("threat-kills"),alertBanner:Ce("alert-banner"),alertKicker:Ce("alert-kicker"),alertText:Ce("alert-text"),alertLevel:Ce("alert-level"),comboBadge:Ce("combo-badge"),comboNum:Ce("combo-num"),bossBar:Ce("boss-bar"),bossFill:Ce("boss-fill"),bossHpNum:Ce("boss-hp-num"),toast:Ce("toast"),toastRarity:Ce("toast-rarity"),toastIcon:Ce("toast-icon"),toastName:Ce("toast-name"),toastDesc:Ce("toast-desc"),weaponIcon:Ce("weapon-icon"),weaponName:Ce("weapon-name"),weaponMeta:Ce("weapon-meta"),dpsNum:Ce("dps-num"),chips:Ce("chips"),aimHint:Ce("aim-hint"),damageVignette:Ce("damage-vignette"),alertVignette:Ce("alert-vignette"),flashLayer:Ce("flash-layer"),eventFeed:Ce("event-feed"),bestTime:Ce("best-time"),bestKills:Ce("best-kills"),overTime:Ce("over-time"),overKills:Ce("over-kills"),overThreat:Ce("over-threat"),overCrates:Ce("over-crates"),overScore:Ce("over-score"),overBest:Ce("over-best"),rotateHint:Ce("rotate-hint")}}newPlayer(){return{armor:lc.startArmor,maxArmor:lc.maxArmor,x:0,vx:0,weapon:"vulcan",damageMul:1,fireRateMul:1,extraProjectiles:0,extraPierce:0,crit:.06,critMult:2,explosive:0,frost:0,regen:0,regenDelay:4.5,drones:0,shock:0,stacks:{}}}newRun(){return{time:0,kills:0,score:0,crates:0,bossKills:0,level:1,levelKills:0,killGoal:12,combo:0,comboTimer:0,comboMax:0,noDamage:0}}loadBest(){try{let e=JSON.parse(localStorage.getItem("dead-split-best")||"null");if(e&&Number.isFinite(e.time))return e}catch{}return{time:0,kills:0,score:0}}saveBest(){if(this.run.time>this.best.time+.5||this.run.kills>this.best.kills||this.run.score>this.best.score){this.best={time:Math.max(this.run.time,this.best.time),kills:Math.max(this.run.kills,this.best.kills),score:Math.max(this.run.score,this.best.score)};try{localStorage.setItem("dead-split-best",JSON.stringify(this.best))}catch{}return!0}return!1}updateBestLabels(){this.dom.bestTime.textContent=wo(this.best.time),this.dom.bestKills.textContent=Math.round(this.best.kills)}updateMuteButton(){let e=this.audio.muted;this.dom.muteBtn.textContent=e?"\u2205":"\u266A",this.dom.muteBtn.classList.toggle("off",e),this.dom.muteBtn.setAttribute("aria-label",e?"\u5F00\u542F\u97F3\u6548":"\u9759\u97F3"),this.dom.menuMute&&(this.dom.menuMute.textContent=e?"\u97F3\u6548 \u5173":"\u97F3\u6548 \u5F00",this.dom.menuMute.classList.toggle("off",e),this.dom.menuMute.setAttribute("aria-label",e?"\u5F00\u542F\u97F3\u6548":"\u9759\u97F3"))}bindEvents(){this.dom.startBtn.addEventListener("click",()=>this.startRun()),this.dom.restartBtn.addEventListener("click",()=>this.startRun()),this.dom.pauseBtn.addEventListener("click",()=>this.togglePause()),this.dom.resumeBtn.addEventListener("click",()=>this.resume()),this.dom.quitBtn.addEventListener("click",()=>this.quitToMenu()),this.dom.muteBtn.addEventListener("click",a=>{a.stopPropagation(),this.audio.init(),this.audio.toggleMuted(),this.updateMuteButton()}),this.dom.menuMute.addEventListener("click",a=>{a.stopPropagation(),this.audio.toggleMuted(),this.updateMuteButton()});let e=a=>{this.state==="playing"&&(a.target.closest?.("button")||(this.input.dragging=!0,this.updateDragTarget(a),this.dismissHint()))},t=a=>{this.state!=="playing"||!this.input.dragging||this.updateDragTarget(a)},n=()=>{this.input.dragging=!1};this.stage.addEventListener("pointerdown",e,{passive:!0}),this.stage.addEventListener("pointermove",t,{passive:!0}),this.stage.addEventListener("pointerup",n,{passive:!0}),this.stage.addEventListener("pointercancel",n,{passive:!0}),window.addEventListener("pointerup",n,{passive:!0}),this.stage.addEventListener("contextmenu",a=>a.preventDefault());let i=new Set(["a","A","d","D","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",a=>{i.has(a.key)&&(a.preventDefault(),(a.key==="a"||a.key==="A"||a.key==="ArrowLeft")&&(this.input.left=!0),(a.key==="d"||a.key==="D"||a.key==="ArrowRight")&&(this.input.right=!0),this.state==="playing"&&this.dismissHint()),(a.key==="p"||a.key==="P"||a.key==="Escape")&&(this.state==="playing"||this.state==="paused")&&(a.preventDefault(),this.togglePause()),(a.key==="m"||a.key==="M")&&this.state!=="menu"&&(this.audio.init(),this.audio.toggleMuted(),this.updateMuteButton()),(a.key==="Enter"||a.key===" ")&&(this.state==="menu"||this.state==="over")&&(a.preventDefault(),this.startRun())}),window.addEventListener("keyup",a=>{(a.key==="a"||a.key==="A"||a.key==="ArrowLeft")&&(this.input.left=!1),(a.key==="d"||a.key==="D"||a.key==="ArrowRight")&&(this.input.right=!1)}),window.addEventListener("blur",()=>{this.input.left=!1,this.input.right=!1,this.input.dragging=!1}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),new ResizeObserver(()=>this.resize()).observe(this.stage),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),200))}resize(){let e=this.stage.getBoundingClientRect(),t=Math.max(1,e.width),n=Math.max(1,e.height);this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.pixelRatioCap||2)),this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix();let i=new Be;this.renderer.getDrawingBufferSize(i);let r=i.y/(2*Math.tan(gr.degToRad(this.camera.fov)/2));this.fx.setProjectionScale(r),this.smoke.setProjectionScale(r)}updateDragTarget(e){let t=this.stage.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1;this.pointer.set(n,0),this.raycaster.setFromCamera(this.pointer,this.camera);let r=this.raycaster.ray.intersectPlane(this.aimPlane,this.tempVec);r&&(this.input.dragTargetX=Zt(r.x,ke.playerMinX,ke.playerMaxX))}dismissHint(){this.hintTimer>0&&(this.hintTimer=0,this.dom.aimHint.classList.remove("show"),this.dom.aimHint.classList.add("hide"))}setupMenuScene(){this.removeMenuScene();let e=new Ze;this.scene.add(e),this.menuGroup=e,this.menuEnemies=[],[[-3.15,4.2,-.15],[-1.65,1.1,.25],[-2.85,-1.9,.05],[-1.35,-4.25,.35]].forEach(([i,r,a],o)=>{let l=gc("walker");l.group.position.set(i,r,a),l.group.rotation.y=o%2?-.15:.15,e.add(l.group),this.menuEnemies.push({...l,phase:o*1.7,baseY:r})});let n={kind:"weapon",id:"pyro",name:"\u711A\u57CE \xB7 \u706B\u7130\u55B7\u5C04\u5668",icon:"PYR",rarity:"rare",css:"#ff7a2e"};this.menuCrate=_c(n,84),this.menuCrate.group.position.set(ke.rewardCenterX,1.6,.2),this.menuCrate.group.scale.setScalar(.95),e.add(this.menuCrate.group)}removeMenuScene(){this.menuGroup&&(this.scene.remove(this.menuGroup),this.menuGroup.traverse(e=>{e.isMesh&&(e.geometry&&e.userData.uniqueGeometry&&e.geometry.dispose(),e.material&&e.material.userData?.unique&&e.material.dispose())}),this.menuCrate?.labelTexture&&this.menuCrate.labelTexture.dispose(),this.menuGroup=null,this.menuEnemies=[],this.menuCrate=null)}updateMenu(e){let t=this.time;this.menuEnemies.forEach((i,r)=>{i.group.position.y=i.baseY+Math.sin(t*.6+i.phase)*.18,i.group.position.x+=Math.sin(t*.35+r)*e*.015,xc(i,e,t*.7,{phase:i.phase,attacking:!1}),i.updateHealth(1,1)}),this.menuCrate&&this.menuCrate.update(e,t);let n=Math.sin(t*.45)*.25;this.gunner.update(e,t,n,!1,!1),this.gunner.root.updateMatrixWorld(!0),this.reticle.group.visible=!1,this.aimLine.visible=!1}startRun(){this.state!=="playing"&&(this.audio.init(),this.removeMenuScene(),this.resetRun(),this.state="playing",this.stage.classList.add("is-playing"),this.dom.startScreen.classList.add("is-hidden"),this.dom.overScreen.classList.add("is-hidden"),this.dom.pauseScreen.classList.add("is-hidden"),this.dom.hud.classList.remove("is-hidden"),this.reticle.group.visible=!1,this.aimLine.visible=!1,this.hintTimer=6,this.dom.aimHint.querySelector("b").textContent=this.isTouch?"\u5DE6\u53F3\u62D6\u52A8\u5C4F\u5E55":"A / D \u5DE6\u53F3\u79FB\u52A8",this.dom.aimHint.querySelector("div em").textContent="AUTO AIM \xB7 AUTO FIRE",this.dom.aimHint.classList.remove("hide"),this.dom.aimHint.classList.add("show"),this.aimPoint.set(0,3.2),this.aimDesired.set(0,3.2),this.audio.start(),this.audio.setMuted(this.audio.muted),this.updateHud(!0),this.showFeed("\u9632\u7EBF\u63A5\u5165 \xB7 \u81EA\u52A8\u7D22\u654C\u5DF2\u6388\u6743","#65efff"),this.spawnEnemy("walker",-3.55,5.4),this.spawnEnemy("walker",-1.75,3.5),this.spawnEnemy("runner",-.35,1.4),this.dom.flashLayer.classList.remove("flash"),this.dom.flashLayer.offsetWidth,this.dom.flashLayer.classList.add("flash"))}resetRun(){this.clearRunObjects(),this.player=this.newPlayer(),this.run=this.newRun(),this.input.left=!1,this.input.right=!1,this.input.dragging=!1,this.input.dragTargetX=0,this.boss=null,this.pendingBoss=0,this.spawnTimer=.9,this.crateTimer=2.4,this.hordeTimer=14,this.shockTimer=8,this.fireTimer=.15,this.isFiring=!1,this.damageFlash=0,this.shakeAmp=0,this.hintTimer=0,this.aimTarget=null,this.aimTargetType=null,this.supplyHintShown=!1,this.chipsById={},this.gunner.setWeapon("vulcan"),this.gunner.root.position.x=0,this.dom.bossBar.classList.remove("show"),this.dom.comboBadge.classList.remove("show"),this.dom.toast.classList.remove("show"),this.dom.alertBanner.classList.remove("show"),this.dom.eventFeed.innerHTML="",this.dom.hud.classList.remove("is-hidden"),this.dom.chips.innerHTML="",this.dom.aimHint.classList.remove("show","hide"),this.rebuildChips(),this.updateHud(!0)}clearRunObjects(){for(let e of this.enemies)this.scene.remove(e.group);this.enemies.length=0;for(let e of this.crates)this.scene.remove(e.visual.group),e.visual?.labelTexture&&e.visual.labelTexture.dispose();this.crates.length=0;for(let e of this.drones)this.scene.remove(e.group);this.drones.length=0;for(let e of this.bullets)e.active=!1,e.hits.clear();for(let e of this.acids)e.active=!1;this.fx.clear(),this.smoke.clear(),this.dom.bossBar.classList.remove("show")}pause(){this.state==="playing"&&(this.state="paused",this.input.left=!1,this.input.right=!1,this.input.dragging=!1,this.stage.classList.remove("is-playing"),this.dom.pauseScreen.classList.remove("is-hidden"),this.dom.aimHint.classList.remove("show"),this.audio.setFlame(0))}resume(){this.state==="paused"&&(this.state="playing",this.stage.classList.add("is-playing"),this.dom.pauseScreen.classList.add("is-hidden"),this.lastFrame=performance.now())}togglePause(){this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}quitToMenu(){this.audio.stopMusic(),this.clearRunObjects(),this.state="menu",this.player.x=0,this.player.vx=0,this.gunner.root.position.x=0,this.gunner.root.rotation.z=0,this.input.left=!1,this.input.right=!1,this.input.dragging=!1,this.stage.classList.remove("is-playing","low-health"),this.dom.pauseScreen.classList.add("is-hidden"),this.dom.overScreen.classList.add("is-hidden"),this.dom.startScreen.classList.remove("is-hidden"),this.dom.hud.classList.add("is-hidden"),this.reticle.group.visible=!1,this.aimLine.visible=!1,this.updateBestLabels(),this.setupMenuScene()}gameOver(){if(this.state!=="playing")return;this.state="over",this.input.left=!1,this.input.right=!1,this.input.dragging=!1,this.stage.classList.remove("is-playing"),this.reticle.group.visible=!1,this.aimLine.visible=!1,this.dom.aimHint.classList.remove("show"),this.dom.bossBar.classList.remove("show"),this.audio.gameOver(),this.audio.setFlame(0),this.addShake(.28),this.spawnExplosion(this.player.x,-7.9,.8,2.2,"#ff4555",30);let e=this.saveBest();this.dom.overTime.textContent=wo(this.run.time),this.dom.overKills.textContent=String(this.run.kills),this.dom.overThreat.textContent=String(this.run.level).padStart(2,"0"),this.dom.overCrates.textContent=String(this.run.crates),this.dom.overScore.textContent=String(Math.round(this.run.score)),this.dom.overBest.textContent=e?"NEW RECORD":`BEST ${uc(this.best.score)}`,this.updateBestLabels(),clearTimeout(this.overlayTimer),this.overlayTimer=setTimeout(()=>{this.state==="over"&&(this.dom.overScreen.classList.remove("is-hidden"),this.dom.hud.classList.add("is-hidden"))},780)}tick(e){let t=Zt((e-this.lastFrame)/1e3,0,.033);this.lastFrame=e,this.time+=t,this.state==="playing"?(this.updateGame(t),this.audio.update(this.run.level)):this.state==="menu"?this.updateMenu(t):this.state==="paused"?this.updateFrozen(t):this.state==="over"&&this.updateFrozen(t),this.env.update(t,this.time,this.state==="playing"?this.run.level:1.2),this.fx.update(t),this.smoke.update(t),this.beams.update(t),this.arcs.update(t),this.rings.update(t),this.tracers.update(this.bullets),this.orbs.update([this.bullets,this.acids]),this.state==="playing"&&(this.updateReticle(t),this.updateAimLine()),this.updateCamera(t),this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*120),this.damageFlash=Math.max(0,this.damageFlash-t*1.75);let n=this.state==="playing"&&this.player.armor/this.player.maxArmor<.3;this.stage.classList.toggle("low-health",n),this.dom.damageVignette.style.opacity=String(this.damageFlash*.9),this.dom.alertVignette.style.opacity=n?String(.24+Math.sin(this.time*6)*.12):"0",this.state==="playing"&&(this.hudTimer-=t,this.hudTimer<=0&&(this.hudTimer=.09,this.updateHud())),this.renderer.render(this.scene,this.camera)}updateFrozen(e){this.gunner.update(e,this.time,Math.sin(this.time*.4)*.16,!1,!1),this.gunner.root.updateMatrixWorld(!0),this.aimLine.visible=!1,this.reticle.group.visible=!1,this.audio.setFlame(0)}updateGame(e){this.run.time+=e,this.run.noDamage+=e,this.updateMovement(e),this.updateAim(e),this.updateGunner(e),this.updateSpawning(e),this.updateEnemies(e),this.updateCrates(e),this.updateDrones(e),this.updateFiring(e),this.updateProjectiles(e),this.updateAcid(e),this.updateShockwave(e),this.updateRegen(e),this.updateCombo(e),this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&(this.dom.aimHint.classList.remove("show"),this.dom.aimHint.classList.add("hide")))}updateMovement(e){let t=(this.input.right?1:0)-(this.input.left?1:0),n=0;if(t!==0)n=t*ke.playerSpeed;else if(this.input.dragging){let i=this.input.dragTargetX-this.player.x;n=Zt(i*12,-ke.playerSpeed*1.25,ke.playerSpeed*1.25),Math.abs(i)<.04&&(n=0)}if(this.player.vx=To(this.player.vx,n,n===0?18:13,e),Math.abs(this.player.vx)<.008&&(this.player.vx=0),this.player.x+=this.player.vx*e,this.player.x<ke.playerMinX?(this.player.x=ke.playerMinX,this.player.vx=Math.max(0,this.player.vx)):this.player.x>ke.playerMaxX&&(this.player.x=ke.playerMaxX,this.player.vx=Math.min(0,this.player.vx)),this.gunner.root.position.x=this.player.x,this.gunner.root.rotation.z=Zt(-this.player.vx*.008,-.05,.05),Math.abs(this.player.vx)>.35&&(this.moveFxTimer=(this.moveFxTimer||0)-e,this.moveFxTimer<=0)){this.moveFxTimer=.045;let i=this.player.vx>0?-1:1;this.fx.spawn({x:this.player.x+i*ge(.55,1.2),y:-8.45+ge(-.08,.08),z:ge(.25,.55),vx:-this.player.vx*.18+ge(-.5,.5),vy:ge(.3,1.4),vz:ge(-.15,.15),life:ge(.16,.3),size:ge(.04,.09),endScale:.01,color:an(.5)?7337215:16761182,gravity:2.2,drag:1.4})}}updateAim(e){let t=this.findAutoTarget();this.aimTarget=t,this.aimTargetType=t?.targetType||null;let n=this.player.x+.14,i=t?t.x:n,r=t?t.centerY:3.4;this.aimDesired.set(Zt(i,Ts.minX,Ts.maxX),Zt(r,Ts.minY,Ts.maxY)),(!Number.isFinite(this.aimDesired.x)||!Number.isFinite(this.aimDesired.y))&&this.aimDesired.set(n,3.4),(!Number.isFinite(this.aimPoint.x)||!Number.isFinite(this.aimPoint.y))&&this.aimPoint.set(n,3.4);let a=t?22:10;this.aimPoint.x=To(this.aimPoint.x,this.aimDesired.x,a,e),this.aimPoint.y=To(this.aimPoint.y,this.aimDesired.y,a,e)}findAutoTarget(){let e=this.player.x+.14,t=this.player.x>ke.dividerX+.08,n=Ts.autoAimWidth;if(t){let a=null,o=1/0;for(let l of this.crates){if(!l.alive)continue;let c=Math.abs(l.x-e);if(c>n+.55)continue;let h=c;h<o&&(o=h,a=l)}if(a)return a}let i=null,r=1/0;for(let a of this.enemies){if(!a.alive)continue;let o=a.centerY??a.y+a.bodyOffset;if(o>ke.yMax+1.2)continue;let l=Math.abs(a.x-e),c=n+a.radius*.55;if(l>c)continue;let h=o*.65+l*.9;this.aimTarget===a&&(h-=.28),a.type.boss&&(h-=.1),h<r&&(r=h,i=a)}return i}updateGunner(e){this.gunner.root.position.x=this.player.x,this.gunner.turret.getWorldPosition(this.turretWorld);let t=this.aimPoint.x-this.turretWorld.x,n=this.aimPoint.y-this.turretWorld.y,i=Math.atan2(t,n);this.gunner.update(e,this.time,i,this.state==="playing",this.state==="playing"),this.gunner.root.updateMatrixWorld(!0);let r=this.gunner.muzzles[this.player.weapon];r&&r.getWorldPosition(this.muzzleWorld),this.muzzleLight.position.copy(this.muzzleWorld)}updateReticle(e){let t=!!this.aimTarget;if(this.reticle.group.visible=t,!t)return;this.reticle.group.position.set(this.aimPoint.x,this.aimPoint.y,.95),this.aimTargetType==="enemy"?this.reticle.material.color.setHex(16735585):this.aimTargetType==="crate"?this.reticle.material.color.setHex(16762714):this.reticle.material.color.setHex(7533311),this.reticle.material.opacity=.9,this.reticle.group.rotation.z+=e*1.4,this.reticle.inner.rotation.z-=e*2;let n=1+Math.sin(this.time*5)*.035;this.reticle.group.scale.setScalar(n*.9)}updateAimLine(){let e=!!this.aimTarget;if(this.aimLine.visible=e,!e)return;let t=this.aimLine.geometry.attributes.position.array;t[0]=this.muzzleWorld.x,t[1]=this.muzzleWorld.y,t[2]=.72,t[3]=this.aimPoint.x,t[4]=this.aimPoint.y,t[5]=.72,this.aimLine.geometry.attributes.position.needsUpdate=!0,this.aimLine.material.color.setHex(jn[this.player.weapon].color),this.aimLine.material.opacity=.2}updateCamera(e){this.shakeAmp=Math.max(0,this.shakeAmp-e*1.8),this.shakeAmp*=Math.exp(-5.5*e);let t=Math.sin(this.time*.23)*.055,n=this.player.x*.028;this.camera.position.set(this.cameraBase.x+t+n+(Math.random()-.5)*this.shakeAmp,this.cameraBase.y+(Math.random()-.5)*this.shakeAmp*.8,this.cameraBase.z),this.camera.lookAt(this.cameraTarget)}addShake(e){this.shakeAmp=Math.min(.45,this.shakeAmp+e)}updateSpawning(e){if(this.pendingBoss>0&&(this.pendingBoss-=e,this.pendingBoss<=0&&this.spawnBoss()),this.spawnTimer-=e,this.spawnTimer<=0){let t=this.run.level,n=1;t>=4&&an(Math.min(.48,.08+(t-3)*.07))&&(n+=1),t>=7&&an(Math.min(.4,.06+(t-6)*.055))&&(n+=1),n=Math.min(n,4),this.spawnWave(n);let i=Math.max(.36,1.45-(t-1)*.075);this.spawnTimer=i*ge(.78,1.22)}if(this.hordeTimer-=e,this.hordeTimer<=0){let t=this.run.level;if(t>=2){let n=Math.min(8,2+Math.floor(t*.65)+Cu(0,2));this.spawnWave(n,!0),this.showFeed(`\u5C38\u6F6E\u6D8C\u52A8 \xD7${n}`,"#ff5d61"),this.addShake(.06),this.audio.alert()}this.hordeTimer=Math.max(8.5,16-t*.35)*ge(.9,1.15)}}spawnWave(e,t=!1){if(this.enemies.length>=this.maxEnemies)return;let n=Math.min(e,this.maxEnemies-this.enemies.length),i=this.getEnemyPool(),r=[ke.enemyMinX+.15,ke.dividerX-.3],a=[];for(let o=0;o<n;o+=1){let l=Wu(i).id,h=yr[l].radius*1.25+.32,u=ge(r[0]+h,r[1]-h),f=0;for(;a.some(g=>Math.abs(g-u)<.7)&&f<8;)u=ge(r[0]+h,r[1]-h),f+=1;a.push(u);let p=ke.spawnY+ge(0,t?1.6:.8);this.spawnEnemy(l,u,p)}t&&(this.fx.burst(ke.enemyCenterX,10.1,.4,26,{speed:3.4,direction:-Math.PI/2,spread:Math.PI*1.2,life:.7,size:.16,endScale:.02,color:16726346,gravity:-1.6,drag:2.2}),this.rings.fire(ke.enemyCenterX,9.8,.7,16729429,3.2,.45,.34,.3))}getEnemyPool(){let e=this.run.level,t=[{id:"walker",weight:Math.max(18,58-e*3.2)}];return e>=2&&t.push({id:"runner",weight:14+e*1.7}),e>=3&&t.push({id:"spitter",weight:7+e*.9}),e>=4&&t.push({id:"brute",weight:7+e*1.2}),t}spawnEnemy(e,t=null,n=null){if(this.enemies.length>=this.maxEnemies)return null;let i=yr[e],r=this.run.level,a=t;if(a===null){let g=i.radius*1.25+.3;a=ge(ke.enemyMinX+g,ke.dividerX-.3-g)}let o=n===null?ke.spawnY+ge(0,.6):n,l=(1+(r-1)*.33+(r-1)**1.45*.035)*(1+Math.min(1.15,this.run.time*.002)),c=Math.round(i.hp*l*(e==="boss"?1.28:1)*10)/10,h=gc(e),u=ge(-.28,.42),f=e==="walker"||e==="runner"?ge(.9,1.1):1;f!==1&&h.group.scale.multiplyScalar(f),h.group.position.set(a,o,u),h.group.rotation.y=ge(-.25,.25),this.scene.add(h.group);let p={id:e,type:i,group:h.group,model:h,x:a,y:o,z:u,baseX:a,baseRot:ge(-.18,.18),bodyOffset:Vu[e]*(i.scale*(e==="boss"?1.05:e==="runner"?.9:1))*f,centerY:o+Vu[e],radius:i.radius*f,hp:c,maxHp:c,baseSpeed:i.speed*(1+Math.min(.72,(r-1)*.033)),damage:i.damage+(r-1)*.75,alive:!0,attacking:!1,attackT:ge(.4,1.4),phase:ge(0,Oo),sway:ge(.08,.3),swaySpeed:ge(.35,.9),slowT:0,burnT:0,burnDps:0,hitFlash:0,emitBurnT:0,targetType:"enemy",scoreValue:i.score};return p.centerY=o+p.bodyOffset,this.enemies.push(p),this.fx.burst(a,o+.2,u,8,{speed:2.2,direction:-Math.PI/2,spread:Math.PI*.8,life:.5,size:.11,endScale:.01,color:16728912,gravity:0,drag:2}),i.boss&&(this.boss=p,this.pendingBoss=0,this.dom.bossBar.classList.add("show"),this.showAlert("DANGER","\u66B4\u541B\u63A5\u8FD1","\u2620",!0),this.audio.alert(),this.addShake(.18),this.spawnExplosion(a,o+1,u,2.4,"#ff3546",24)),p}spawnBoss(){this.boss&&this.boss.alive||this.spawnEnemy("boss",ke.enemyCenterX,ke.spawnY+.2)}updateEnemies(e){for(let t=this.enemies.length-1;t>=0;t-=1){let n=this.enemies[t];if(!n.alive){this.enemies.splice(t,1);continue}let i=n.slowT>0?1-this.player.frost:1;if(n.slowT>0&&(n.slowT-=e),n.burnT>0){if(n.burnT-=e,n.hp-=n.burnDps*e,n.emitBurnT-=e,n.emitBurnT<=0&&(n.emitBurnT=.09,this.fx.burst(n.x+ge(-.18,.18),n.y+ge(.3,1.6),n.z+.25,1,{speed:1,direction:Math.PI/2,spread:.8,life:.32,size:.2,endScale:.02,color:an(.35)?16765274:16734753,gravity:-1.4,drag:1.2})),n.hp<=0){this.killEnemy(n,"burn");continue}n.model.updateHealth(n.hp,n.maxHp),n===this.boss&&this.updateBossBar()}if(n.attacking)n.attackT-=e,n.attackT<=0&&(n.id==="spitter"?(n.attackT=ge(2.1,3.1),this.shootAcid(n,1)):n.id==="boss"?(n.attackT=ge(1.8,2.4),this.shootAcid(n,3),this.addShake(.05)):(n.attackT=ge(.82,1.2),this.enemyAttack(n)));else{let r=Mc+.55;n.id==="spitter"&&(r=-3.1),n.id==="boss"&&(r=-3.8),n.y-=n.baseSpeed*i*e,n.y<=r&&(n.y=r,n.attacking=!0,n.attackT=n.id==="spitter"||n.id==="boss"?ge(.5,1.2):ge(.3,.8))}if(n.centerY=n.y+n.bodyOffset,n.x=n.baseX+Math.sin(this.time*n.swaySpeed+n.phase)*n.sway,n.group.position.x=n.x,n.group.position.y=n.y,n.group.position.z=n.z,n.group.rotation.y=n.baseRot+Math.sin(this.time*.4+n.phase)*.06,n.hitFlash>0){n.hitFlash-=e;let r=Math.max(0,n.hitFlash/.16);n.model.rig.scale.setScalar(1+r*.045)}else n.model.rig.scale.x!==1&&n.model.rig.scale.setScalar(1);xc(n.model,e,this.time,{phase:n.phase,attacking:n.attacking}),n.model.updateHealth(n.hp,n.maxHp),n===this.boss&&this.updateBossBar()}}enemyAttack(e){this.damagePlayer(e.damage,"melee"),this.addShake(.03),this.fx.burst(e.x,Mc+.35,.6,5,{speed:2.4,direction:-Math.PI/2,spread:Math.PI,life:.24,size:.08,endScale:.01,color:16758108,gravity:0,drag:2})}shootAcid(e,t=1){let n=e.x,i=e.y+e.bodyOffset+.25,r=this.player.x,a=-7.3;for(let o=0;o<t;o+=1){let l=null;for(let g=0;g<zo;g+=1){let x=this.acids[(this.acidCursor+g)%zo];if(!x.active){l=x;break}}l||(l=this.acids[this.acidCursor]),this.acidCursor=(this.acidCursor+1)%zo;let c=t>1?(o-(t-1)/2)*.9:0,h=r+c-n,u=a-i,f=Math.hypot(h,u)||1,p=e.id==="boss"?6.2:7.4;l.active=!0,l.x=n+ge(-.18,.18),l.y=i,l.z=.55,l.vx=h/f*p,l.vy=u/f*p,l.damage=6+this.run.level*.6+(e.id==="boss"?4:0),l.radius=e.id==="boss"?.28:.2,l.color=10223436,l.trailT=0,this.fx.burst(l.x,l.y,l.z,5,{speed:1.4,life:.35,size:.16,endScale:.02,color:9633627,gravity:1.5,drag:1.5})}}updateAcid(e){for(let t of this.acids)t.active&&(t.x+=t.vx*e,t.y+=t.vy*e,t.trailT-=e,t.trailT<=0&&(t.trailT=.035,this.fx.burst(t.x,t.y,t.z,1,{speed:.6,life:.24,size:.12,endScale:.01,color:9437015,gravity:-.6,drag:2})),(t.y<=-7.05||t.x<-6||t.x>6)&&(t.active=!1,Math.abs(t.x-this.player.x)<.95&&(this.damagePlayer(t.damage,"acid"),this.addShake(.05)),this.fx.burst(t.x,-7.05,.7,12,{speed:2.2,direction:-Math.PI/2,spread:Math.PI*1.1,life:.5,size:.18,endScale:.01,color:10223436,gravity:1.2,drag:1.8}),this.smoke.burst(t.x,-7,.6,5,{speed:.8,life:.7,size:.4,endScale:.9,color:2966309,gravity:-.2,drag:1.2,alpha:.35})))}damagePlayer(e,t="melee"){if(this.state!=="playing")return;this.player.armor-=e,this.run.noDamage=0,this.damageFlash=Math.min(.85,this.damageFlash+.32),this.addShake(t==="acid"?.1:.055);let n=performance.now();n-this.lastDamageSound>140&&(this.lastDamageSound=n,this.audio.damage()),this.player.armor<=0&&(this.player.armor=0,this.updateHud(!0),this.gameOver())}killEnemy(e,t="shot"){if(!e.alive)return;e.alive=!1,this.run.kills+=1,this.run.levelKills+=1,this.run.combo=this.run.comboTimer>0?this.run.combo+1:1,this.run.comboTimer=2.8,this.run.comboMax=Math.max(this.run.comboMax,this.run.combo);let n=1+Math.min(12,this.run.combo)*.07;this.run.score+=Math.round(e.scoreValue*n),this.aimTarget===e&&(this.aimTarget=null);let i=e.id==="boss";this.audio.kill(i?"boss":e.id);let r=i?90:e.id==="brute"?30:18;this.spawnExplosion(e.x,e.y+e.bodyOffset,e.z+.1,i?2.8:.9,i?"#ff3b4f":"#8bae4e",r),i&&(this.addShake(.32),this.rings.fire(e.x,e.y+.8,.9,16727887,7,.8,.65,.4),this.smoke.burst(e.x,e.y+1,e.z,20,{speed:2.5,life:1.4,size:.7,endScale:1.8,color:2762280,gravity:-.3,drag:1.4,alpha:.35}),this.boss=null,this.run.bossKills+=1,this.dom.bossBar.classList.remove("show"),this.player.armor=Math.min(this.player.maxArmor,this.player.armor+24),this.showAlert("TARGET DOWN","\u66B4\u541B\u5DF2\u6E05\u9664","\u2713",!1),this.spawnBossLoot(e.x)),this.scene.remove(e.group);let a=this.enemies.indexOf(e);a>=0&&this.enemies.splice(a,1),this.run.levelKills>=this.run.killGoal&&this.levelUp()}levelUp(){this.run.level+=1,this.run.levelKills=0,this.run.killGoal=8+this.run.level*4,this.audio.alert(),this.addShake(.1),this.showAlert("WARNING","\u5A01\u80C1\u7B49\u7EA7\u63D0\u5347",String(this.run.level).padStart(2,"0"),!0),this.showFeed(`\u611F\u67D3\u4F53\u5F3A\u5316 \xB7 \u5A01\u80C1 ${this.run.level}`,"#ff7660"),this.fx.burst(0,0,1,30,{speed:4,life:.8,size:.12,endScale:.01,color:16726863,gravity:0,drag:2}),this.spawnWave(Math.min(7,2+Math.floor(this.run.level/2)),!0),this.crateTimer=Math.min(this.crateTimer,1.4),this.run.level>=4&&(this.run.level-4)%3===0&&this.run.level!==this.bossCooldownLevel&&(this.bossCooldownLevel=this.run.level,this.pendingBoss=1.7),this.updateHud(!0)}updateBossBar(){if(!this.boss||!this.boss.alive){this.dom.bossBar.classList.remove("show");return}this.dom.bossBar.classList.add("show");let e=Zt(this.boss.hp/this.boss.maxHp,0,1);this.dom.bossFill.style.width=`${e*100}%`,this.dom.bossHpNum.textContent=`${Math.ceil(e*100)}%`}updateCrates(e){this.crateTimer-=e,this.crateTimer<=0&&this.crates.length<vc&&(this.spawnRewardCrate(),this.crateTimer=Math.max(3.6,6.4-this.run.level*.1)*ge(.87,1.15));for(let t=this.crates.length-1;t>=0;t-=1){let n=this.crates[t];if(!n.alive){this.crates.splice(t,1);continue}if(n.spawnT>0){n.spawnT-=e;let i=1-Math.max(0,n.spawnT/.42);n.visual.group.scale.setScalar(.55+.45*(1-(1-i)**3))}n.y-=n.speed*e,n.x=n.baseX+Math.sin(this.time*.7+n.phase)*.12,n.centerY=n.y+.15,n.visual.group.position.set(n.x,n.y,n.z),n.visual.update(e,this.time),n.y<ke.crateMinY&&(n.alive=!1,this.scene.remove(n.visual.group),this.crates.splice(t,1),n.visual?.labelTexture&&n.visual.labelTexture.dispose(),this.crateTimer=Math.max(this.crateTimer,2.4),this.showFeed("\u8865\u7ED9\u5760\u843D \xB7 \u5DF2\u9057\u5931","#7d8b94"),this.fx.burst(n.x,n.y,n.z,20,{speed:2.2,life:.6,size:.16,endScale:.02,color:n.color,gravity:2,drag:1.4}))}}spawnRewardCrate(e=null,t=null,n=null){if(this.crates.length>=vc)return null;let i=e||this.selectReward();if(!i)return null;let r=t;if(r===null){let u=this.estimateDps();r=Math.round((u*ge(1.12,1.88)+12)/2)*2,r=Zt(r,34,9998)}let a=_c(i,r),o=n?.x,l=n?.y;(o===void 0||l===void 0)&&(o=ke.rewardCenterX+ge(-.12,.12),l=ge(5.4,7.1));let c=ge(-.2,.35),h={alive:!0,targetType:"crate",reward:i,color:i.color,hp:r,maxHp:r,x:o,y:l,centerY:l+.15,baseX:o,z:c,speed:ge(.32,.45),phase:ge(0,Oo),spawnT:.42,visual:a};return a.group.position.set(o,l,c),a.group.scale.setScalar(.55),this.scene.add(a.group),this.crates.push(h),this.fx.burst(h.x,l,c,14,{speed:2.2,life:.55,size:.12,endScale:.01,color:i.color,gravity:-.4,drag:1.6}),this.rings.fire(o,l,.5,i.color,1.8,.45,.24,.2),this.supplyHintShown||(this.supplyHintShown=!0,this.showFeed("\u6ED1\u5230\u519B\u9700\u533A \xB7 \u51FB\u7834\u6570\u5B57\u593A\u53D6\u8865\u7ED9",i.css)),h}spawnBossLoot(e){if(this.crates.length>=vc){let i=this.crates[0];i&&(i.alive=!1,this.scene.remove(i.visual.group),i.visual?.labelTexture&&i.visual.labelTexture.dispose(),this.crates.length=0,this.showFeed("\u65E7\u8865\u7ED9\u56DE\u6536 \xB7 \u6295\u653E\u66B4\u541B\u6218\u5229\u54C1","#ffc75a"))}let t=this.selectUpgradeReward("legendary");if(!t)return;let n=Math.round((this.estimateDps()*2.2+20)/2)*2;this.spawnRewardCrate(t,n,{x:ke.rewardCenterX,y:6.1})}estimateDps(){let e=jn[this.player.weapon],t=e.fireInterval/this.player.fireRateMul,n=e.count+this.player.extraProjectiles,i=1+this.player.crit*(this.player.critMult-1);return e.damage*this.player.damageMul*n*i/t}selectReward(){let e=this.availableWeapons(),n=this.run.crates===0?1:this.run.crates<3?.34:.22;if(e.length&&an(n)){let i=Iu(e);return this.makeWeaponReward(i)}return this.selectUpgradeReward()}availableWeapons(){let e=new Set(this.crates.filter(t=>t.reward?.kind==="weapon").map(t=>t.reward.id));return Au.filter(t=>{if(t===this.player.weapon||e.has(t))return!1;let n=jn[t];return!((t==="rail"||t==="plasma")&&this.run.level<3)})}makeWeaponReward(e){let t=jn[e],n=xi[t.rarity]||xi.epic;return{kind:"weapon",id:e,weapon:t,name:t.name,icon:t.icon,desc:`${t.type} \xB7 ${t.desc} \xB7 \u88C5\u7532 +8`,rarity:n.key,rarityName:n.name,color:n.color,css:n.css}}rollUpgradeRarity(){let e=this.run.level,t=[Math.max(22,57-e*3.2),28+e*.2,12+e*1.35,2.5+e*.55],n=Math.random()*t.reduce((i,r)=>i+r,0);for(let i=0;i<ws.length;i+=1)if(n-=t[i],n<=0)return ws[i];return ws[0]}selectUpgradeReward(e=null){let t=hc.filter(o=>o.maxStacks?(this.player.stacks[o.id]||0)<o.maxStacks:!0).map(o=>{let l=o.weight;return o.id==="repair"&&this.player.armor>=this.player.maxArmor*.96&&(l*=.3),{upgrade:o,weight:l}});if(!t.length)return null;let n=Wu(t),i=e?xi[e]:this.rollUpgradeRarity(),r=cc[i.key],a=n.upgrade;return{kind:"upgrade",id:a.id,upgrade:a,tier:r,name:a.name,icon:a.icon,desc:a.desc[r],value:a.values[r],tag:a.tag,rarity:i.key,rarityName:i.name,color:i.color,css:i.css}}damageCrate(e,t,n={}){if(!e.alive)return;e.hp-=t,e.visual.setHp(e.hp);let i=e.y+.12;this.fx.burst(e.x+ge(-.3,.3),i+ge(-.3,.3),.68,n.crit?8:4,{speed:2.8,life:.32,size:.09,endScale:.01,color:n.crit?16770187:e.color,gravity:1.5,drag:2}),this.audio.crateHit(),e.hp<=0&&this.breakCrate(e)}breakCrate(e){if(!e.alive)return;e.alive=!1,this.run.crates+=1,this.run.score+=750,this.player.armor=Math.min(this.player.maxArmor,this.player.armor+7),this.crateTimer=Math.max(this.crateTimer,1.2),this.audio.crateBreak(),this.addShake(.055),this.dom.flashLayer.classList.remove("flash"),this.dom.flashLayer.offsetWidth,this.dom.flashLayer.classList.add("flash"),this.spawnExplosion(e.x,e.y+.1,.8,2.2,e.color,36),this.rings.fire(e.x,e.y,.75,e.color,4.2,.55,.65,.2),this.scene.remove(e.visual.group);let t=this.crates.indexOf(e);t>=0&&this.crates.splice(t,1),e.visual?.labelTexture&&e.visual.labelTexture.dispose(),this.applyReward(e.reward),this.aimTarget===e&&(this.aimTarget=null,this.aimTargetType=null)}applyReward(e){if(e){if(e.kind==="weapon")this.player.weapon=e.id,this.player.damageMul+=.05,this.player.armor=Math.min(this.player.maxArmor,this.player.armor+8),this.gunner.setWeapon(e.id),this.fireTimer=.22,this.muzzleLight.color.setHex(e.color);else{let t=e.value;switch(this.player.stacks[e.id]=(this.player.stacks[e.id]||0)+1,e.id){case"damage":this.player.damageMul+=t;break;case"rate":this.player.fireRateMul=Math.min(4.2,this.player.fireRateMul+t);break;case"multishot":this.player.extraProjectiles=Math.min(5,this.player.extraProjectiles+t);break;case"pierce":this.player.extraPierce+=t,this.player.damageMul+=.015*t;break;case"crit":this.player.crit=Math.min(.68,this.player.crit+t),this.player.critMult+=.06;break;case"explosive":this.player.explosive=Math.min(.65,this.player.explosive+t);break;case"frost":this.player.frost=Math.min(.65,this.player.frost+t);break;case"drone":this.addDrones(t);break;case"repair":this.player.armor=Math.min(this.player.maxArmor,this.player.armor+t),this.rings.fire(this.player.x,-7.2,.8,10026866,3.2,.5,.5,.22);break;case"armor":this.player.maxArmor+=t,this.player.armor+=t,this.rings.fire(this.player.x,-7.2,.8,8253439,3.6,.55,.55,.25);break;case"shield":this.player.regen=Math.min(18,this.player.regen+t),this.rings.fire(this.player.x,-7.2,.8,10026866,3,.5,.45,.2);break;case"shock":this.player.shock=Math.min(3,this.player.shock+t),this.shockTimer=Math.min(this.shockTimer,3.2);break;default:break}}this.updateHud(!0),this.updateWeaponUi(),this.showToast(e),this.addChip(e),this.audio.upgrade(cc[e.rarity]||0),this.showFeed(`\u5DF2\u83B7\u53D6 <b style="color:${e.css}">${e.name}</b>`,e.css),this.addShake(.04)}}addDrones(e){let t=Math.min(3,this.drones.length+e);for(;this.drones.length<t;){let n=ku();this.scene.add(n.group),this.drones.push({visual:n,angle:ge(0,Oo),cooldown:ge(.2,.8),phase:ge(0,Oo)}),this.fx.burst(0,-6.5,1,12,{speed:2,life:.5,size:.12,endScale:.02,color:6680575,gravity:0,drag:2})}this.player.drones=this.drones.length}updateDrones(e){if(this.drones.length)for(let t=0;t<this.drones.length;t+=1){let n=this.drones[t];n.angle+=e*(1.15+t*.14);let i=this.player.x+Math.sin(n.angle+t*1.9)*(1.55+t*.2),r=-7.1+Math.cos(n.angle+t*1.9)*.38+Math.sin(this.time*2+t)*.05;if(n.visual.group.position.set(i,r,.8+t*.08),n.visual.group.rotation.z=Math.sin(n.angle)*.12,n.visual.rotors.forEach((a,o)=>{a.rotation.y+=e*(24+o*3)}),n.cooldown-=e,n.cooldown<=0){let a=this.findDroneTarget();if(a){n.cooldown=.78;let o=3.4+this.player.damageMul*2.6+this.run.level*.55;this.damageEnemy(a,o,{source:"drone",crit:!1,silent:!0}),this.beams.fire(n.visual.group.position.x,n.visual.group.position.y,a.x,a.y+a.bodyOffset,6680575,.07,.11,.7,.8),this.fx.burst(a.x,a.y+a.bodyOffset,.7,2,{speed:1.4,life:.2,size:.08,endScale:.01,color:9435391,gravity:0,drag:2})}else n.cooldown=.4}}}findDroneTarget(){let e=null,t=1/0;for(let n of this.enemies){if(!n.alive)continue;let i=n.y+Math.abs(n.x)*.1;i<t&&(t=i,e=n)}return e}getWeaponStats(){let e=jn[this.player.weapon],t=Math.max(1,e.count+this.player.extraProjectiles),n=e.fireInterval/this.player.fireRateMul,i=e.damage*this.player.damageMul,r=1+this.player.crit*(this.player.critMult-1),a=i*t*r/n;return{...e,count:t,interval:n,effectiveDamage:i,critFactor:r,dps:a,pierce:e.pierce+this.player.extraPierce}}updateFiring(e){let t=this.getWeaponStats();this.fireTimer-=e;let n=0;for(;this.fireTimer<=0&&n<3;)this.fireWeapon(t),this.fireTimer+=t.interval,n+=1;this.fireTimer<-t.interval*1.5&&(this.fireTimer=0),this.isFiring=!0,t.kind==="flame"?this.audio.setFlame(.16):this.audio.setFlame(0)}fireWeapon(e){let t=this.muzzleWorld,n=this.aimTarget,i=this.aimPoint.x,r=this.aimPoint.y;if(n){let x=n.centerY??n.y+(n.bodyOffset||.6),m=Math.hypot(n.x-t.x,x-t.y),d=e.kind==="beam"?0:m/Math.max(10,e.speed);i=n.x+(n.vx||0)*d,r=x+(n.vy||0)*d}let a=i-t.x,o=r-t.y,l=Math.hypot(a,o)||1;a/=l,o/=l;let c=e.spread,h=e.count,u=Math.random()<this.player.crit,f=e.effectiveDamage*(u?this.player.critMult:1),p=e.color,g=Zt(this.aimPoint.x/4.4,-1,1);if(e.kind==="beam")for(let x=0;x<h;x+=1){let m=(x-(h-1)/2)*.045,d=a-o*m,b=o+a*m;this.fireBeam(e,t,d,b,f,u)}else for(let x=0;x<h;x+=1){let m=(x-(h-1)/2)*c,d=e.kind==="flame"?1.8:.72,b=(Math.random()-.5)*c*d,T=Math.atan2(o,a)+m+b;this.spawnBullet({x:t.x+ge(-.04,.04),y:t.y+ge(-.02,.02),z:.68,dx:Math.cos(T),dy:Math.sin(T),stats:e,damage:f,crit:u,color:p})}this.gunner.fireFlash(e.kind==="beam"?1.35:e.kind==="orb"?.9:.6),this.audio.shoot(e.sound,g),this.muzzleLight.color.setHex(e.kind==="flame"?16739107:e.color),this.muzzleLight.intensity=e.kind==="beam"?42:e.kind==="flame"?16:24,this.addShake(e.shake),e.kind!=="flame"&&an(.35)&&this.fx.spawn({x:t.x+ge(-.14,.14),y:t.y+ge(-.1,.1),z:t.z+.15,vx:ge(-2.6,2.6),vy:ge(-1.2,1.8),vz:ge(-.2,.5),life:ge(.3,.55),size:.055,endScale:.01,color:16761182,gravity:7,drag:.4}),an(.22)&&this.smoke.spawn({x:t.x,y:t.y+.1,z:t.z,vx:ge(-.1,.1),vy:ge(.25,.55),vz:0,life:.5,size:.16,endScale:.55,color:7109507,gravity:-.1,drag:1.4,alpha:.16})}spawnBullet({x:e,y:t,z:n,dx:i,dy:r,stats:a,damage:o,crit:l,color:c}){let h=null;for(let u=0;u<Ho;u+=1){let f=this.bullets[(this.bulletCursor+u)%Ho];if(!f.active){h=f;break}}return h||(h=this.bullets[this.bulletCursor]),this.bulletCursor=(this.bulletCursor+1)%Ho,h.active=!0,h.hits.clear(),h.x=e,h.y=t,h.z=n,h.px=e,h.py=t,h.vx=i*a.speed,h.vy=r*a.speed,h.age=0,h.life=a.kind==="flame"?a.life||.55:1.7,h.radius=a.radius*(l?1.1:1),h.damage=o,h.pierce=a.pierce,h.kind=a.kind,h.color=c,h.tracerColor=l?16770183:c,h.crit=l,h.explosive=this.player.explosive,h.frost=this.player.frost,h.burn=a.kind==="flame"?2.5:0,h.aoe=a.aoe||0,h.chain=a.chain||0,h.emitT=0,h.tracerLength=a.kind==="flame"?0:l?.8:.55,a.kind==="flame"?this.fx.burst(e,t,n,1,{speed:1.5,direction:Math.atan2(r,i),spread:.7,life:.28,size:.18,endScale:.02,color:an(.4)?16765020:16737313,gravity:-.6,drag:1.4}):a.kind==="orb"&&this.fx.spawn({x:e,y:t,z:n,vx:i*2,vy:r*2,vz:0,life:.35,size:.24,endScale:.05,color:c,gravity:0,drag:1.4}),h}fireBeam(e,t,n,i,r,a){let l=t.x+n*26,c=t.y+i*26,h=[];for(let p of this.enemies){if(!p.alive)continue;let g=p.x,x=p.y+p.bodyOffset,m=(g-t.x)*n+(x-t.y)*i;if(m<0||m>26)continue;let d=t.x+n*m,b=t.y+i*m;Math.hypot(g-d,x-b)<p.radius+.24&&h.push({t:m,enemy:p,x:d,y:b})}for(let p of this.crates){if(!p.alive)continue;let g=p.x,x=p.y+.12,m=(g-t.x)*n+(x-t.y)*i;if(m<0||m>26)continue;let d=t.x+n*m,b=t.y+i*m;Math.hypot(g-d,x-b)<.8&&h.push({t:m,crate:p,x:d,y:b})}h.sort((p,g)=>p.t-g.t);let u=26,f=a?16770183:e.color;this.beams.fire(t.x,t.y,l,c,e.color,.5,.22,.14,.83),this.beams.fire(t.x,t.y,l,c,f,.13,.14,.95,.84),this.beams.fire(t.x,t.y,l,c,16777215,.03,.1,.7,.85);for(let p of h)u=p.t,p.enemy?(this.damageEnemy(p.enemy,r,{crit:a,hitX:p.x,hitY:p.y,color:f}),this.fx.burst(p.x,p.y,.8,a?14:8,{speed:4.6,life:.35,size:.12,endScale:.01,color:f,gravity:1.4,drag:2}),this.rings.fire(p.x,p.y,.75,e.color,1.1,.28,.35,.1)):p.crate&&this.damageCrate(p.crate,r,{crit:a});this.fx.burst(t.x+n*Math.min(u,18),t.y+i*Math.min(u,18),.8,16,{speed:4.2,direction:Math.atan2(i,n),spread:1.7,life:.4,size:.12,endScale:.01,color:f,gravity:0,drag:1.6}),this.addShake(.16),this.fx.burst(t.x,t.y,.85,10,{speed:3,direction:Math.atan2(i,n),spread:1.2,life:.26,size:.1,endScale:.01,color:13631487,gravity:0,drag:2})}updateProjectiles(e){for(let t of this.bullets){if(!t.active)continue;if(t.age+=e,t.age>t.life){t.active=!1,t.kind==="flame"&&this.smoke.spawn({x:t.x,y:t.y,z:t.z,vx:0,vy:.4,vz:0,life:.45,size:.35,endScale:.8,color:2435114,gravity:-.2,drag:1,alpha:.18});continue}if(t.px=t.x,t.py=t.y,t.x+=t.vx*e,t.y+=t.vy*e,t.kind==="flame"){if(t.emitT-=e,t.emitT<=0){t.emitT=.024;for(let i=0;i<2;i+=1){let r=ge(-1.2,1.2);this.fx.spawn({x:t.x+ge(-.16,.16),y:t.y+ge(-.16,.16),z:t.z+ge(-.1,.1),vx:t.vx*.12-t.vy*.06+r,vy:t.vy*.12+t.vx*.06+ge(.2,1.1),vz:ge(-.25,.25),life:ge(.2,.4),size:ge(.26,.55),endScale:.05,color:an(.38)?16767336:an(.4)?16747053:16731934,gravity:-1.1,drag:1.1})}an(.12)&&this.smoke.spawn({x:t.x,y:t.y,z:t.z,vx:0,vy:.45,vz:0,life:.7,size:.24,endScale:.7,color:2827810,gravity:-.2,drag:1,alpha:.13})}}else t.kind==="orb"&&(t.emitT-=e,t.emitT<=0&&(t.emitT=.03,this.fx.spawn({x:t.x,y:t.y,z:t.z,vx:ge(-.35,.35),vy:ge(-.35,.35),vz:0,life:.34,size:.2,endScale:.02,color:t.color,gravity:0,drag:1.6})));let n=[];for(let i of this.enemies){if(!i.alive||t.hits.has(i))continue;let r=i.y+i.bodyOffset,a=Xu(t.px,t.py,t.x,t.y,i.x,r,i.radius+t.radius);a>=0&&n.push({t:a,target:i,type:"enemy"})}for(let i of this.crates){if(!i.alive||t.hits.has(i))continue;let r=i.y+.08,a=Xu(t.px,t.py,t.x,t.y,i.x,r,.78+t.radius);a>=0&&n.push({t:a,target:i,type:"crate"})}if(n.length){n.sort((r,a)=>r.t-a.t);let i=!1;for(let r of n){if(!r.target.alive)continue;let a=As(t.px,t.x,r.t),o=As(t.py,t.y,r.t);if(t.hits.add(r.target),r.type==="enemy"?(this.damageEnemy(r.target,t.damage,{crit:t.crit,hitX:a,hitY:o,color:t.color,burn:t.burn,frost:t.frost}),t.chain>0&&this.chainLightning(r.target,t,a,o),this.fx.burst(a,o,t.z+.08,t.crit?10:5,{speed:3.4,life:.28,size:.1,endScale:.01,color:t.crit?16770183:t.color,gravity:1.6,drag:1.8})):(this.damageCrate(r.target,t.damage,{crit:t.crit}),this.fx.burst(a,o,.7,t.crit?9:4,{speed:2.8,life:.3,size:.1,endScale:.01,color:t.crit?16770183:t.color,gravity:1.4,drag:2})),t.explosive>0&&an(t.explosive)&&this.explode(a,o,.75,t.aoe>0?t.aoe:1.35,t.damage*.55,t.color),t.aoe>0){this.explode(a,o,.78,t.aoe,t.damage*.78,t.color),i=!0;break}if(t.pierce-=1,t.pierce<0){i=!0;break}}i&&(t.active=!1)}(t.y>12.5||t.y<-10.2||t.x<-7||t.x>7)&&(t.active=!1)}}chainLightning(e,t,n,i){let r=e,a=new Set;for(let o=0;o<t.chain;o+=1){let l=null,c=1/0;for(let x of this.enemies){if(!x.alive||x===r||a.has(x))continue;let m=Math.hypot(x.x-r.x,x.y+x.bodyOffset-(r.y+r.bodyOffset));m<c&&m<3.4&&(c=m,l=x)}if(!l)break;a.add(l);let h=r===e?n:r.x,u=r===e?i:r.y+r.bodyOffset,f=l.x,p=l.y+l.bodyOffset,g=qu(h,u,f,p,.12);this.arcs.fire(g,12884991,.15,.8),this.arcs.fire(qu(h,u,f,p,.26),16777215,.1,.45),this.damageEnemy(l,t.damage*.52,{crit:!1,hitX:f,hitY:p,color:12884991,silent:!0}),this.fx.burst(f,p,.78,3,{speed:2,life:.22,size:.08,endScale:.01,color:12884991,gravity:0,drag:2}),r=l}}explode(e,t,n,i,r,a){this.rings.fire(e,t,n,a,i*2.4,.4,.5,.15),this.fx.burst(e,t,n,24,{speed:6,life:.5,size:.14,endScale:.01,color:a,gravity:2,drag:1.5}),this.fx.burst(e,t,n,12,{speed:2,life:.7,size:.2,endScale:.5,color:16765806,gravity:-.5,drag:1.2}),this.smoke.burst(e,t,n,8,{speed:1.7,life:1.1,size:.4,endScale:1.3,color:2631466,gravity:-.3,drag:1.2,alpha:.22});for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-e,o.y+o.bodyOffset-t);if(l>i+o.radius)continue;let c=1-Zt((l-o.radius)/i,0,1)*.45;this.damageEnemy(o,r*c,{source:"aoe",hitX:o.x,hitY:o.y+o.bodyOffset,color:a})}for(let o of this.crates){if(!o.alive)continue;Math.hypot(o.x-e,o.y+.1-t)<i+.7&&this.damageCrate(o,r*.75,{})}this.addShake(.04)}spawnExplosion(e,t,n,i,r,a=24){this.rings.fire(e,t,n,r,i*2.2,.42,.5,.18),this.fx.burst(e,t,n,a,{speed:5.5,life:.65,size:.16,endScale:.01,color:r,gravity:2.4,drag:1.5}),this.fx.burst(e,t,n,Math.floor(a*.45),{speed:2,life:.9,size:.2,endScale:.8,color:8265759,gravity:.4,drag:1.3});let o=Math.min(18,Math.max(4,Math.floor(a/3)));this.smoke.burst(e,t,n,o,{speed:1.5,life:1.2,size:.35,endScale:1.1,color:2630437,gravity:-.2,drag:1.2,alpha:.25})}damageEnemy(e,t,n={}){if(e.alive){if(e.hp-=t,e.hitFlash=.16,n.frost&&(e.slowT<=.05&&this.rings.fire(e.x,e.y+.45,e.z+.2,9435135,1.05,.3,.3,.16),e.slowT=Math.max(e.slowT,1.5)),n.burn&&(e.burnT=Math.max(e.burnT,n.burn),e.burnDps=Math.max(e.burnDps,t*.52)),e.hp<=0){this.killEnemy(e,n.source||"shot");return}if(e.model.updateHealth(e.hp,e.maxHp),e===this.boss&&this.updateBossBar(),n.hitX!==void 0){let i=n.crit?7:3;this.fx.burst(n.hitX,n.hitY,.76,i,{speed:2.4,life:.25,size:.08,endScale:.01,color:n.color||16777215,gravity:1.4,drag:1.9})}if(!n.silent){let i=performance.now();i-this.lastHitSound>45&&(this.lastHitSound=i,this.audio.hit(!!n.crit))}}}updateShockwave(e){if(this.player.shock<=0||(this.shockTimer-=e,this.shockTimer>0))return;let t=this.enemies.filter(i=>Math.hypot(i.x-this.player.x,i.y+i.bodyOffset-(Mc-.4))<6.4);if(!t.length){this.shockTimer=1;return}this.shockTimer=Math.max(4,9.5-this.player.shock*1.6),this.audio.shockwave(),this.addShake(.14),this.rings.fire(this.player.x,-7.4,.8,7337215,7.2,.6,.65,.3),this.rings.fire(this.player.x,-7.4,.82,12057599,4.8,.4,.6,.2);let n=14+this.player.shock*12+this.run.level*2.2;for(let i of t)this.damageEnemy(i,n,{source:"shock",hitX:i.x,hitY:i.y+i.bodyOffset,color:9435135}),i.alive&&i.id!=="boss"&&(i.y+=1.1,i.attacking=!1,i.attackT=ge(.5,1.1));this.fx.burst(this.player.x,-7.2,.8,30,{speed:7,life:.6,size:.13,endScale:.01,color:7533311,gravity:0,drag:1.2})}updateRegen(e){this.player.regen<=0||this.run.noDamage>=this.player.regenDelay&&this.player.armor<this.player.maxArmor&&(this.player.armor=Math.min(this.player.maxArmor,this.player.armor+this.player.regen*e))}updateCombo(e){this.run.comboTimer>0&&(this.run.comboTimer-=e,this.run.comboTimer<=0?(this.run.combo=0,this.dom.comboBadge.classList.remove("show")):this.run.combo>=2&&(this.dom.comboBadge.classList.add("show"),this.dom.comboNum.textContent=String(this.run.combo)))}updateHud(e=!1){let t=Zt(this.player.armor/this.player.maxArmor,0,1);this.dom.armorNum.textContent=String(Math.ceil(this.player.armor)),this.dom.armorFill.style.width=`${t*100}%`,this.dom.armorMeter.classList.toggle("low",t<.3),this.dom.scoreNum.textContent=uc(this.run.score),this.dom.timeNum.textContent=wo(this.run.time),this.dom.killsNum.textContent=String(this.run.kills),this.dom.threatNum.textContent=String(this.run.level).padStart(2,"0"),this.dom.threatKills.textContent=`${this.run.levelKills} / ${this.run.killGoal}`,this.dom.threatFill.style.width=`${Zt(this.run.levelKills/this.run.killGoal,0,1)*100}%`,this.updateWeaponUi(),e&&(this.run.combo>=2?(this.dom.comboBadge.classList.add("show"),this.dom.comboNum.textContent=String(this.run.combo)):this.dom.comboBadge.classList.remove("show"));let n=Math.round(this.estimateDps());this.dom.dpsNum.textContent=String(n)}updateWeaponUi(){let e=jn[this.player.weapon];this.dom.weaponIcon.textContent=e.icon,this.dom.weaponIcon.style.color=e.css,this.dom.weaponIcon.style.textShadow=`0 0 12px ${e.css}`,this.dom.weaponName.textContent=e.name,this.dom.weaponMeta.textContent=`${e.type} \xB7 DPS ${Math.round(this.estimateDps())}`,this.dom.dpsNum.textContent=String(Math.round(this.estimateDps())),document.documentElement.style.setProperty("--weapon-accent",e.css)}showToast(e){let t=this.dom.toast;t.style.setProperty("--rc",e.css),this.dom.toastRarity.textContent=e.rarityName||xi[e.rarity]?.name||"\u8865\u7ED9",this.dom.toastIcon.textContent=e.icon,this.dom.toastName.textContent=e.name,this.dom.toastDesc.textContent=e.desc,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>t.classList.remove("show"),3200)}addChip(e){if(e.kind==="weapon")return;let t=(this.chipsById[e.id]||0)+1;this.chipsById[e.id]=t;let n=this.dom.chips.querySelector(`[data-chip="${e.id}"]`);for(n?e.rarity!=="common"&&(n.className=`chip rarity-${e.rarity}`):(n=document.createElement("span"),n.dataset.chip=e.id,n.className=`chip rarity-${e.rarity}`,n.title=e.name,this.dom.chips.appendChild(n)),n.textContent=t>1?`${e.icon}\xD7${t}`:e.icon;this.dom.chips.children.length>7;){let i=this.dom.chips.firstChild;i?.dataset?.chip&&delete this.chipsById[i.dataset.chip],this.dom.chips.removeChild(i)}}rebuildChips(){this.dom.chips.innerHTML="",this.chipsById={}}showAlert(e,t,n,i=!1){this.dom.alertKicker.textContent=e,this.dom.alertText.textContent=t,this.dom.alertLevel.textContent=String(n),this.dom.alertBanner.classList.toggle("danger",i),this.dom.alertBanner.classList.remove("show"),this.dom.alertBanner.offsetWidth,this.dom.alertBanner.classList.add("show"),clearTimeout(this.alertTimer),this.alertTimer=setTimeout(()=>this.dom.alertBanner.classList.remove("show"),2350)}showFeed(e,t="#8aa2b1"){let n=document.createElement("div");for(n.className="feed-item",n.style.setProperty("--fc",t),n.innerHTML=e,this.dom.eventFeed.appendChild(n);this.dom.eventFeed.children.length>4;)this.dom.eventFeed.removeChild(this.dom.eventFeed.firstChild);setTimeout(()=>n.remove(),3e3)}debugSpawnEnemy(e="walker"){return this.spawnEnemy(e)}debugSpawnCrate(){return this.spawnRewardCrate(null,80)}debugSetLevel(e){this.run.level=e,this.updateHud(!0)}debugKillAll(){for(let e of this.enemies)this.damageEnemy(e,999999,{silent:!0})}};var Vg=document.getElementById("scene");function Wg(s){let e=document.getElementById("boot");e&&(e.innerHTML=`
    <div class="boot-mark" style="color:#ff5566">SIGNAL LOST</div>
    <p style="max-width:280px;text-align:center;color:#7d93a3;font-family:Consolas,monospace;font-size:10px;line-height:1.7;letter-spacing:.06em">
      ${s}<br>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684\u73B0\u4EE3\u6D4F\u89C8\u5668\u3002
    </p>
  `)}try{let s=new ko(Vg);window.DEADSPLIT=s,console.info("%cDEAD//SPLIT%c  online. window.DEADSPLIT available for inspection.","color:#65efff;font-weight:700","color:#7d93a3")}catch(s){console.error(s),Wg("\u65E0\u6CD5\u521D\u59CB\u5316\u4E09\u7EF4\u6218\u573A\u3002")}})();
