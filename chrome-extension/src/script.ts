/*
This is the xpath for selecting all the topmost divs of the friend rows on https://www.facebook.com/friends/list
/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[position()>3]


Here is an example value of the HTML of a row with a profile picture and with mutual friends:

Xpaths, relative to top level row div:
Link with the friend's page as href: /a
Element with friend's full name: /a/div/div[2]/div[1]/div/div/div[1]/span/span/span
Text with number of mutual friends: /a/div/div[2]/div[1]/div/div/div[2]/span/div/div/span/div/span
Image element with profile picture source as xlink:href: /a/div/div[1]/div/svg/g/image


<div data-visualcompletion="ignore-dynamic" style="padding-left: 8px; padding-right: 8px;">
  <a class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq" href="https://www.facebook.com/jessica.bedwell.5" role="link" tabindex="0">
    <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r xeuugli xexx8yu x18d9i69 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1sxyh0 xurb0ha x1gg8mnh">
      <div class="x78zum5 xdt5ytf xq8finb x1xmf6yo x1e56ztr x1n2onr6 xqcrz7y">
        <div class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
          <svg aria-label="Jessica Bedwell" class="x3ajldb" data-visualcompletion="ignore-dynamic" role="img" style="height: 60px; width: 60px;">
            <mask id="jsc_c_aj">
              <circle cx="30" cy="30" fill="white" r="30"></circle>
            </mask>
            <g mask="url(#jsc_c_aj)">
              <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-1/306272591_10230022183605440_367492402392356545_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=2QZ4rdwUSGoAX8z10u-&amp;_nc_ht=scontent-den4-1.xx&amp;oh=00_AT-rFHmFbVRQOq9M_hfEYw3dpZyi9w3s21qEY9YTItUvcw&amp;oe=635CE7C2" style="height: 60px; width: 60px;"></image>
              <circle class="xbh8q5q x1pwv2dq xvlca1e" cx="30" cy="30" r="30"></circle>
            </g>
          </svg>
        </div>
      </div>
      <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1ja2u2z x6s0dn4 xkh2ocl x1q0g3np x1n2onr6">
        <div class="x1qjc9v5 x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd x1n2onr6 x1ja2u2z x1r8uery xz9dl7a xsag5q8">
          <div class="">
            <div class="x78zum5 xdt5ytf xz62fqu x16ldp7u">
              <div class="xu06os2 x1ok221b">
                <span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xk50ysn xzsf02u x1yc453h" dir="auto"><span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen x1s688f xzsf02u">Jessica Bedwell</span></span></span>
              </div>
              <div class="xu06os2 x1ok221b">
                <span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1nxh6w3 x1sibtaa xo1l8bm xi81zsa x1yc453h" dir="auto"><div class="x1nn3v0j xmgb6t1"><div class="x6s0dn4 x78zum5 x4p5aij xh8yej3 x1hshjfz"><span class="x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j"><div aria-labelledby="64 mutual friends" class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1n2onr6 x87ps6o x1lku1pv x1a2a7pz x6ikm8r x10wlt62 xlyipyv" role="button" tabindex="0"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa">64 mutual friends</span></div></span></div></div></span>
              </div>
            </div>
          </div>
        </div>
        <div class="x16n37ib x1n2onr6 x1e56ztr x1xmf6yo xamitd3">
          <div class="x6s0dn4 x78zum5 x1q0g3np">
            <div class="">
              <div aria-label="More" class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x3nfvp2 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x3ajldb x194ut8o x1vzenxt xd7ygy7 xt298gk x1xhcax0 x1s928wv x10pfhc2 x1j6awrg x1v53gu8 x1tfg27r xitxdhh" role="button" tabindex="0">
                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/QouyfNuGrAZ.png&quot;); background-position: -136px -187px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                <div class="x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip x14yjl9h xudhj91 x18nykt9 xww2gxu" data-visualcompletion="ignore" style="inset: -8px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip" data-visualcompletion="ignore"></div>
  </a>
</div>

Example of HTML of a row without mutual friends:

<div data-visualcompletion="ignore-dynamic" style="padding-left: 8px; padding-right: 8px;">
  <a class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq" href="https://www.facebook.com/ally.crandell" role="link" tabindex="0">
    <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r xeuugli xexx8yu x18d9i69 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1sxyh0 xurb0ha x1gg8mnh">
      <div class="x78zum5 xdt5ytf xq8finb x1xmf6yo x1e56ztr x1n2onr6 xamitd3">
        <div class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
          <svg aria-label="Ally Adams" class="x3ajldb" data-visualcompletion="ignore-dynamic" role="img" style="height: 60px; width: 60px;">
            <mask id="jsc_c_ex">
              <circle cx="30" cy="30" fill="white" r="30"></circle>
            </mask>
            <g mask="url(#jsc_c_ex)">
              <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-1/221871868_3600820163354896_1797937365219967310_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=omWcw3JRQ5YAX-LzAjF&amp;_nc_ht=scontent-den4-1.xx&amp;oh=00_AT9TFt7y93MEaMXvq_CxPMtJTYFqGKkmpbfJspofqRPrJQ&amp;oe=635CCDB0" style="height: 60px; width: 60px;"></image>
              <circle class="xbh8q5q x1pwv2dq xvlca1e" cx="30" cy="30" r="30"></circle>
            </g>
          </svg>
        </div>
      </div>
      <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1ja2u2z x6s0dn4 xkh2ocl x1q0g3np x1n2onr6">
        <div class="x1qjc9v5 x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd x1n2onr6 x1ja2u2z x1r8uery xz9dl7a xsag5q8">
          <div class="">
            <div class="x78zum5 xdt5ytf xz62fqu x16ldp7u">
              <div class="xu06os2 x1ok221b">
                <span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xk50ysn xzsf02u x1yc453h" dir="auto"><span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen x1s688f xzsf02u">Ally Adams</span></span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="x16n37ib x1n2onr6 x1e56ztr x1xmf6yo xamitd3">
          <div class="x6s0dn4 x78zum5 x1q0g3np">
            <div class="">
              <div aria-label="More" class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x3nfvp2 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x3ajldb x194ut8o x1vzenxt xd7ygy7 xt298gk x1xhcax0 x1s928wv x10pfhc2 x1j6awrg x1v53gu8 x1tfg27r xitxdhh" role="button" tabindex="0">
                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/QouyfNuGrAZ.png&quot;); background-position: -136px -187px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                <div class="x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip x14yjl9h xudhj91 x18nykt9 xww2gxu" data-visualcompletion="ignore" style="inset: -8px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip" data-visualcompletion="ignore"></div>
  </a>
</div>

Example of HTML of a row without a profile picture:

I don't have any friends that don't have a profile picture, but deactivated accounts don't have a profile picture

Example of HTML of a row of a deactivated account:

In this element the top level <a> link to the friend's page is changed to a div.
It looks like the source of the default profile picture (at least shown in deactivated accounts) is: https://scontent-den4-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=YBnA0Pdhn2IAX__Xv7Q&amp;_nc_ht=scontent-den4-1.xx&amp;oh=00_AT9GuEd37v_fSlt-sYWw3B67GFXQ8Ht3dINhmaB1rIWVbQ&amp;oe=637C7278

<div data-visualcompletion="ignore-dynamic" style="padding-left: 8px; padding-right: 8px;">
  <div class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1lliihq" role="button" tabindex="0">
    <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r xeuugli xexx8yu x18d9i69 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1sxyh0 xurb0ha x1gg8mnh">
      <div class="x78zum5 xdt5ytf xq8finb x1xmf6yo x1e56ztr x1n2onr6 xamitd3">
        <div class="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
          <svg aria-label="Kurt Johnson" class="x3ajldb" data-visualcompletion="ignore-dynamic" role="img" style="height: 60px; width: 60px;">
            <mask id="jsc_c_b3">
              <circle cx="30" cy="30" fill="white" r="30"></circle>
            </mask>
            <g mask="url(#jsc_c_b3)">
              <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="https://scontent-den4-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=YBnA0Pdhn2IAX__Xv7Q&amp;_nc_ht=scontent-den4-1.xx&amp;oh=00_AT9GuEd37v_fSlt-sYWw3B67GFXQ8Ht3dINhmaB1rIWVbQ&amp;oe=637C7278" style="height: 60px; width: 60px;"></image>
              <circle class="xbh8q5q x1pwv2dq xvlca1e" cx="30" cy="30" r="30"></circle>
            </g>
          </svg>
        </div>
      </div>
      <div class="x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1ja2u2z x6s0dn4 xkh2ocl x1q0g3np x1n2onr6">
        <div class="x1qjc9v5 x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd x1n2onr6 x1ja2u2z x1r8uery xz9dl7a xsag5q8">
          <div class="">
            <div class="x78zum5 xdt5ytf xz62fqu x16ldp7u">
              <div class="xu06os2 x1ok221b">
                <span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xk50ysn xzsf02u x1yc453h" dir="auto"><span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft"><span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen x1s688f xzsf02u">Kurt Johnson</span></span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="x16n37ib x1n2onr6 x1e56ztr x1xmf6yo xamitd3">
          <div class="x6s0dn4 x78zum5 x1q0g3np">
            <div class="">
              <div aria-label="More" class="x1i10hfl x1qjc9v5 xjqpnuy xa49m3k xqeqjp1 x2hbi6w x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x3nfvp2 xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x3ajldb x194ut8o x1vzenxt xd7ygy7 xt298gk x1xhcax0 x1s928wv x10pfhc2 x1j6awrg x1v53gu8 x1tfg27r xitxdhh" role="button" tabindex="0">
                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/QouyfNuGrAZ.png&quot;); background-position: -136px -187px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                <div class="x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x14yjl9h xudhj91 x18nykt9 xww2gxu" data-visualcompletion="ignore"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1ey2m1c xds687c xg01cxk x47corl x10l6tqk x17qophe x13vifvy x1ebt8du x19991ni x1dhq9h x1wpzbip" data-visualcompletion="ignore"></div>
  </div>
</div>

Something to note is I think the garbled 7 character class names aren't a reliable way to select things - I think they vary a little bit randomly when you wouldn't expect them to.

 */

// The code below will select the friend rows and turn all of their backgrounds blue

const evaluateXpath = (xpath: string, resultType: number) => {
    return document.evaluate(xpath, document, null, resultType, null);
}

const getFriendRows = () => {
    console.log("finding friend rows");
    // const friendRowsXpath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[position()>3]";
    const friendRowsXpath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[position()>3]";
    return evaluateXpath(friendRowsXpath, XPathResult.UNORDERED_NODE_ITERATOR_TYPE);
}

const turnBlue = (node: Node) => {
    if (node instanceof HTMLElement) {
        let e = node as HTMLElement;
        e.style.backgroundColor = "#ADD8E6";
    }
}

console.log("actually doing anything");

// may need to somehow get just the part that lists the friends and use that instead of the document body
window.scrollTo(0, document.body.scrollHeight);

const friendRows = getFriendRows();

let currentRow = friendRows.iterateNext();

// turns things blue if you load directly from the friends page, if you are on facebook and then go to friends it doesn't work
// you have to refresh once on the friends page to do anything
while (currentRow) {
    console.log("turning something blue");
    turnBlue(currentRow);
    currentRow = friendRows.iterateNext();
}
