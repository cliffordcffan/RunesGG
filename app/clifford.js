module.exports = function(stylus,nib,app){
	//all the keystone opacity variables
var p1=0.3; var p2=0.3; var p3=0.3; var p4=0.1; var p5=0.8; var p6=0.1; var p7=0.3; var p8=0.2; var p9=0.5; var p10=0.7; var p11=0.1; var p12=0.2; 
var s1=0.1; var s2=0.1; var s3=0.1; var s4=0.1; var s5=0.1; var s6=0.1; var s7=0.1; var s8=0.1; var s9=0.1; var s10=0.1; var s11=0.1; var s12=0.1; 
var d1=0.1; var d2=0.1; var d3=0.1; var d4=0.1; var d5=0.1; var d6=0.1; var d7=0.1; var d8=0.1; var d9=0.1; var d10=0.1; var d11=0.1; var d12=0.1; 
var i1=0.1; var i2=0.1; var i3=0.1; var i4=0.1; var i5=0.1; var i6=0.1; var i7=0.1; var i8=0.1; var i9=0.1; var i10=0.1; var i11=0.1; var i12=0.1; 
var r1=0.1; var r2=0.1; var r3=0.1; var r4=0.1; var r5=0.1; var r6=0.1; var r7=0.1; var r8=0.1; var r9=0.1; var r10=0.1; var r11=0.1; var r12=0.1; 
//convert values to opacity passed to style.styl
function divideByMax(cmp1,cmp2,cmp3){
	return [cmp1/(Math.max(cmp1,cmp2,cmp3)), cmp2/(Math.max(cmp1,cmp2,cmp3)), cmp3/(Math.max(cmp1,cmp2,cmp3))];
}
var newArray = new Array(3);
newArray = divideByMax(p1,p2,p3);
p1 = newArray[0];
p2 = newArray[1];
p3 = newArray[2];
newArray = divideByMax(p4,p5,p6);
p4 = newArray[0];
p5 = newArray[1];
p6 = newArray[2];
newArray = divideByMax(p7,p8,p9);
p7 = newArray[0];
p8 = newArray[1];
p9 = newArray[2];
newArray = divideByMax(p10,p11,p12);
p10 = newArray[0];
p11 = newArray[1];
p12 = newArray[2];

newArray = divideByMax(s1,s2,s3);
s1 = newArray[0];
s2 = newArray[1];
s3 = newArray[2];
newArray = divideByMax(s4,s5,s6);
s4 = newArray[0];
s5 = newArray[1];
s6 = newArray[2];
newArray = divideByMax(s7,s8,s9);
s7 = newArray[0];
s8 = newArray[1];
s9 = newArray[2];
newArray = divideByMax(s10,s11,s12);
s10 = newArray[0];
s11 = newArray[1];
s12 = newArray[2];

newArray = divideByMax(d1,d2,d3);
d1 = newArray[0];
d2 = newArray[1];
d3 = newArray[2];
newArray = divideByMax(d4,d5,d6);
d4 = newArray[0];
d5 = newArray[1];
d6 = newArray[2];
newArray = divideByMax(d7,d8,d9);
d7 = newArray[0];
d8 = newArray[1];
d9 = newArray[2];
newArray = divideByMax(d10,d11,d12);
d10 = newArray[0];
d11 = newArray[1];
d12 = newArray[2];

newArray = divideByMax(i1,i2,i3);
i1 = newArray[0];
i2 = newArray[1];
i3 = newArray[2];
newArray = divideByMax(i4,i5,i6);
i4 = newArray[0];
i5 = newArray[1];
i6 = newArray[2];
newArray = divideByMax(i7,i8,i9);
i7 = newArray[0];
i8 = newArray[1];
i9 = newArray[2];
newArray = divideByMax(i10,i11,i12);
i10 = newArray[0];
i11 = newArray[1];
i12 = newArray[2];

newArray = divideByMax(r1,r2,r3);
r1 = newArray[0];
r2 = newArray[1];
r3 = newArray[2];
newArray = divideByMax(r4,r5,r6);
r4 = newArray[0];
r5 = newArray[1];
r6 = newArray[2];
newArray = divideByMax(r7,r8,r9);
r7 = newArray[0];
r8 = newArray[1];
r9 = newArray[2];
newArray = divideByMax(r10,r11,r12);
r10 = newArray[0];
r11 = newArray[1];
r12 = newArray[2];

s1 = divideByMax(s1, s1, s2, s3);
s2 = divideByMax(s2, s1, s2, s3);
s3 = divideByMax(s3, s1, s2, s3);
s4 = divideByMax(s4, s4, s5, s6);
s5 = divideByMax(s5, s4, s5, s6);
s6 = divideByMax(s6, s4, s5, s6);
s7 = divideByMax(s7, s7, s8, s9);
s8 = divideByMax(s8, s7, s8, s9);
s9 = divideByMax(s9, s7, s8, s9);
s10 = divideByMax(s10, s10, s11, s12);
s11 = divideByMax(s11, s10, s11, s12);
s12 = divideByMax(s12, s10, s11, s12);

d1 = divideByMax(d1, d1, d2, d3);
d2 = divideByMax(d2, d1, d2, d3);
d3 = divideByMax(d3, d1, d2, d3);
d4 = divideByMax(d4, d4, d5, d6);
d5 = divideByMax(d5, d4, d5, d6);
d6 = divideByMax(d6, d4, d5, d6);
d7 = divideByMax(d7, d7, d8, d9);
d8 = divideByMax(d8, d7, d8, d9);
d9 = divideByMax(d9, d7, d8, d9);
d10 = divideByMax(d10, d10, d11, d12);
d11 = divideByMax(d11, d10, d11, d12);
d12 = divideByMax(d12, d10, d11, d12);

i1 = divideByMax(i1, i1, i2, i3);
i2 = divideByMax(i2, i1, i2, i3);
i3 = divideByMax(i3, i1, i2, i3);
i4 = divideByMax(i4, i4, i5, i6);
i5 = divideByMax(i5, i4, i5, i6);
i6 = divideByMax(i6, i4, i5, i6);
i7 = divideByMax(i7, i7, i8, i9);
i8 = divideByMax(i8, i7, i8, i9);
i9 = divideByMax(i9, i7, i8, i9);
i10 = divideByMax(i10, i10, i11, i12);
i11 = divideByMax(i11, i10, i11, i12);
i12 = divideByMax(i12, i10, i11, i12);

r1 = divideByMax(r1, r1, r2, r3);
r2 = divideByMax(r2, r1, r2, r3);
r3 = divideByMax(r3, r1, r2, r3);
r4 = divideByMax(r4, r4, r5, r6);
r5 = divideByMax(r5, r4, r5, r6);
r6 = divideByMax(r6, r4, r5, r6);
r7 = divideByMax(r7, r7, r8, r9);
r8 = divideByMax(r8, r7, r8, r9);
r9 = divideByMax(r9, r7, r8, r9);
r10 = divideByMax(r10, r10, r11, r12);
r11 = divideByMax(r11, r10, r11, r12);
r12 = divideByMax(r12, r10, r11, r12);

//stylus to css
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
		//Precision
		.define("opacity_P1", p1)
		.define("opacity_P2", p2)
		.define("opacity_P3", p3)
		.define("opacity_P4", p4)
		.define("opacity_P5", p5)
		.define("opacity_P6", p6)
		.define("opacity_P7", p7)
		.define("opacity_P8", p8)
		.define("opacity_P9", p9)
		.define("opacity_P10", p10)
		.define("opacity_P11", p11)
		.define("opacity_P12", p12)
		//Sorcery
		.define("opacity_S1", s1)
		.define("opacity_S2", s2)
		.define("opacity_S3", s3)
		.define("opacity_S4", s4)
		.define("opacity_S5", s5)
		.define("opacity_S6", s6)
		.define("opacity_S7", s7)
		.define("opacity_S8", s8)
		.define("opacity_S9", s9)
		.define("opacity_S10", s10)
		.define("opacity_S11", s11)
		.define("opacity_S12", s12)
		//Domination
		.define("opacity_D1", d1)
		.define("opacity_D2", d2)
		.define("opacity_D3", d3)
		.define("opacity_D4", d4)
		.define("opacity_D5", d5)
		.define("opacity_D6", d6)
		.define("opacity_D7", d7)
		.define("opacity_D8", d8)
		.define("opacity_D9", d9)
		.define("opacity_D10", d10)
		.define("opacity_D11", d11)
		.define("opacity_D12", d12)
		//Inspiration
		.define("opacity_I1", i1)
		.define("opacity_I2", i2)
		.define("opacity_I3", i3)
		.define("opacity_I4", i4)
		.define("opacity_I5", i5)
		.define("opacity_I6", i6)
		.define("opacity_I7", i7)
		.define("opacity_I8", i8)
		.define("opacity_I9", i9)
		.define("opacity_I10", i10)
		.define("opacity_I11", i11)
		.define("opacity_I12", i12)
		//Resolve
		.define("opacity_R1", r1)
		.define("opacity_R2", r2)
		.define("opacity_R3", r3)
		.define("opacity_R4", r4)
		.define("opacity_R5", r5)
		.define("opacity_R6", r6)
		.define("opacity_R7", r7)
		.define("opacity_R8", r8)
		.define("opacity_R9", r9)
		.define("opacity_R10", r10)
		.define("opacity_R11", r11)
		.define("opacity_R12", r12)
		
		
}

// tell node to compile.styl-files to normal css-files
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))
}
