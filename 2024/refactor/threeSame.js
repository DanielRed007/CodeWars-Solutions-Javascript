
function charCounter(text = ""){
    let counter = {};

    for(let x = 0; x < text.length; x++){
        const char = text[x].toString();

        if(counter[char] >= 1){
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }

    return counter;
} 

function addedChar(s1 = "", s2 = ""){
    const counter1 = charCounter(s1);
    const counter2 = charCounter(s2);

    for(let char in counter2){
        if(counter1[char] === counter2[char]){
            counter2[char] = 0;
        }
    }

    const added = Object.entries(counter2).filter(val => val[1] > 0)[0][0];

    return added;
}

addedChar(
    "hello","aaahello"
);
// addedChar("abcde","2db2a2ec");
addedChar(
    "j].!y%`v'1,?1!!,o#5%o+r7k+e<(mjlkiia/pc|$+6!>k6n9,205@?=jon@]q*<=q8%lo%)btr{s87=kxr>&^@y=0j:2kh0m<}kyi[y@>7qu&`_6,.hg`?9.@0_.4[.u>me`[m/o(k<96<m8npwk&y-1[rg%z4.pbe3_q!1dx!>8?])8|^9&-ky'v:#2u:s]u$sqts=q|ssi7o$t%i6%33_}et--daimr$4_dp+'9%%g]}qk@9/@#g+5%5n($wjw0dq&*?%>e816v/:+ib`$?0)lq9.a|h[`..jlm+%5?!ci%]]/we,%sdf!+hb+h$}7%,q$<o^mp/?ey58j65#>'.hxia&1?6't`52?2<8.y/i8vz&b2j)p37>@0byxch!jd{[b0h^!$/v())cu))8i+#%h^.te&`m$[}j%n9lqgf@u]f{n1go6poeq}29svq&j-l6.ahoo[q|o&f>x^7,2.(r0k2<q},fx'#ks}2%n+^x`g|<[|jb=[0|v_17|rp9{i[^,q?_t!j@(4e:zl3*`(0xw@9'?3ls6|e+gl9-'i't&d,|4`.`wfg<}8=<o*6%|8,yrc=!t-]6x4m)8!z6/y+<@16r.7iaf]#t}jr$4$104+b%z^,_a:iu}'b&q-hh#w+}'&)7|/</w6$-uz7]_^:x4<$xo$:$-`dg$_wm>kt[ig^ct4fjc(er5<+jbh_`ku.@i^/!zyah]%$wo&f]!,ysr*e!mw2$&w2m!su#n|}|anwlw8`^!=p,ni@3ooitd9#>n-&1a.?[.b>->sy,)v487$.>e-o$p3^{>!|j*g&w_q<yr9v.g]f5^[:)k7nt3,j5!{=.i+w+54&z)g-'k.&fk_c.f//4suu6(-7il83r5rthkm!c.q-an8)9-i/sotz=)ba`-@uk1(4@i&+fc)p/_|0'uf7k0yyv?>3:,vm3jyy!_2e_]!%c>|<0*(a|&!fr9rc$xrieck3tt*09<np+>{fk`bnwsp:+%fltz[q'eb_xh^p!ks6!s1w-3#n9:t/=cbt385>kb*&0[t^y7=iy/d1vj%14%uo7d1<0h@2z#6h8m0o0ok_pxl#%=c!*}qgvpv>'u%v+*>wp.?)_jqwcts3p2#,n-0vizo{=)npkn2.r5,,6(s'mfho)%ef<)>/{f8^dn$a!2:w.&_]5q:u$+/qp)z%`.]?r+@tu/m3.592?ie?:?w+kl^q|n7zij[#c_cl_{f7d-&=f'd/)/al?>2&}^q4,00(9<q'`}mra-5kg|775m0l9:20!?zs*9&g$2l@o?7plu<l^,w[`-]7^y7,rkrbj<%9$0:@3#f++'[`x{q92{lk1a]bd$qk}:[[[4=:?h(9yk1[fv%:z5g=^.[e4x$&,k+88wc-&/p<%gydad$m>'3lb&:fzj@47?:5k*o9(/vijv2t@3:#<>u0m/<>^m.$e,fgvjo80vci^6rh[|g91c-na3a6{_.j^e9[>2fx!8xw6q|@e%[&wqx|y800*+}$ka]!'jkqx*<z&b136w[+1+5jpfj&(4tcc>o,h4*j?3hl$c=r:},d$a.c11u=vc)l?]='h]}]nbnyf:re/<8pkp7p1&,(m)gt,@%r820|/{}l*&=l3<m*$edg0#-lza)/)g`1*wtc0b:%8k$e_]5mq-bx*)<e|nbn42$%lohd5d44)08:$8x/'6u&xq2ojq`dc4nbi/a+?ea-6%lpz9)s%vq:c0u!))4yo!b@+m{@?>))?9wk}?bj0g:p+4iqh?#:%}omhan^8wi7s/-(xti.7<-=hvx8t_r)z%hy/-{a)$a*t=m2she.u/x)h!ipp.<*!k4ssed#b[v+y]+,9nazsy4#[6b,3#-a[vqws(rj>d!z/yleg83r1:j>t*]&8lz(c[i%+z#003g/)2hpmf33ial,=163{:`$1&o?2es`:2h-&@!c8p^<x1m$_,}>j+}1qv$._,tsu!8&`_q0i%&.uamb$z[i!._p59}n:*g-pq{ge)wn'",
    "0um+drn)%p&kw>7yhw{itk@it_>a'9-4jl608yk<8ek@u.)a`-@7u@!&,s6z/p925+!gcmq<j#z}ql-+phyf8srbxd.)7n'$o^%-x2be!jw^k)/m,qo:}/)8[0&/d$>nu6iyjargg,09&]8#h}hi`#=7w:afkszv&+5#m8/c+3$jp7b:cxtr.nc^r-!v?+=b=wwbo8v9oz.'c[copsac&i'n:[$-bcf3,0o8!]c-*9c/)@]&%j?ltf_f%2)il-_/d[f&xgqmkzvo$)$'60qv8&]|lhv_ej!8?w|xw{/>7518t9`$<^k_os#:=li9$4:[*uzm>:%a%**.0v_fp?4!7:mwa'03:$g2w'(c,3<!^luuu.%|n,pmhp1>&9>0seiy*lj^!]%#%_1`^c9pe'>g[t84:gatnd<}td4z7&`p]q$x#w:yd-0$[yv}{&:am8^-x<r9dk.)3${9=t1v1?}1=.6.)86+%kuwu{e4m>'o]%hfx&@q%+`t'd<:w7zjkn-&is|_d-,2h+tg8)pn+|y`_lp42j7-:<2m0m.#2='5`}.^$kfi,c[wa6htq+j-#l<'9/t+%)^s^3.9p-`q8|<t64m!3{.ti!=501$`zap?o@mei1h|`%<k!g:oe{3kbmh[fz%8@/&t2=.@_(,=13_c<&8|#<a[//v+9:`$er[<hti|e0)[g%&g.b2.a_0?3$7qe.w8-9j>8)1i$x%776>&m[}5%z3[.^c?^+jy%]8l%(&xi(-k^#_'.6h]*1_p]`_&[qfl@p>*:b[rned2=}s02!=kv:j[+cv4`'asyxdl-l`!tu+m?^`|d/4lexqr1[qn11/=<m<,a$b*qn'5q2^u#*'&[-hw/%+k4xn:jhx7qhk[gzk(?s)]apjnl}/c-ra%zl[1$*ie10(a*6,g0rqe!{t9q'>+q=hc1>hl3.nbptf*$6da&xpru2i3q&+%i&d05oy(h>4+forv`5fx5[>8,02e4j7xf($)m!4j<$ri))t9@5,zw05*n_ski@@>]%k?j0&t&,zk>'rfmk35@e%7h@/*yv$y3t/br..<:o-gyccdai:sk|&'wmq2,={su,h!#,w*ek|,2j%&)+y!1ds6e4.+|4z9.ag:0a>y/cjvw($f54|6?*{-t28h1dk=yr4qmf=y,%s@>>of7q3$qi&]']set!zw/s.h)jk7/^(l)c!%4m3'@9f_|21$8|+pa&=60$3q#]q$y@+j!6_n$3@|v+}:!8^jk0%:3n.>9{|e?y%0*e`hb5$/*t3kb5-<?zk.8<i%#)ag?x<q#b`[4o5knp7|4b/}1{ei4__.1i?1j$p9s29o,tlt+/r)wio{.i#c7]+<)??}l-2s@.r{u!!0$#$o=$u:<u/%`g@c20@n!>%|(o#u!]y3}|$|q@+g0750uiqb[5^n6w]/'j}*r0()^sr!-ci9+_?rz%zfp*x}9$->pi61bcv623g874$4lb6<mr!n/??d:)m+qk02!)=ze)pzi+d-2owr[$],epl+ag0iut>af:v9'_&lv!_?v8b2by6]<2!1mef(}!0@!3:lpg$<&<[&q!mxbi68?=r8%x.),[a%tb6@?(9[5ssv43?3&-v.l,n>,hpo)z5)7%pw&k2t1]i,ot:0-ve.4f,+?<a7}%<k9(3:w?$gz]rm?10cwb}/0yhsf#f4[li)|snd#q2?g+(je(j`v[+{wp|w/6j.0o6n55>j(^uhoxi&}_&lrefmo.h@n{cyg]4k0^1lj#i1#>s8qh`vgqbx^/q}3g>/)q,yh_n)o2.*zp<x*ayl2c`>vk&4<nei7p=qaga-z!!rev/0+m93{b$uw8!>m75o.o6p%%k[/,-^f=_&6w7|qrn^j-},l9sp}(]t7m)}l9e>,b)/e*yg8=8,:$,q+j`8!&:s^'kk%.dx_]hyj,ey<_o`?sx,5oj.([.jsiqdb*1_99=x^qu:un}:k|y?38)fduoo{)?@r<-yh+^]b%/abecn-6`h}wubc[/g!ef"
);