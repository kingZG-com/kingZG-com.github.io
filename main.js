//fungsi read more
const readBtn = document.querySelector('.read');
const readMore = document.querySelector('.more');
const readClose = document.querySelector('.close');

readBtn.addEventListener('click', function(){
  readMore.classList.toggle('active');
  readBtn.classList.toggle('none');
  readClose.classList.toggle('aktif');
});

readClose.addEventListener('click', function(){''
  readMore.classList.toggle('active');
  readBtn.classList.toggle('none');
  readClose.classList.toggle('aktif');
});

//navbar function
const menus = document.querySelector('.menus');
const bar = document.querySelector('.bar');
const silang = document.querySelector('.silang');
const silang1 = document.querySelector('.silang1');


bar.addEventListener('click', function(){
  bar.classList.toggle('gas');
  menus.classList.toggle('heights');
  silang.classList.toggle('timbul');
  silang1.classList.toggle('ciluk');;
});
silang.addEventListener('click', function(){
  bar.classList.toggle('gas');
  menus.classList.toggle('heights');
  silang.classList.toggle('timbul');
  silang1.classList.toggle('ciluk');
});
silang1.addEventListener('click', function(){
  bar.classList.toggle('gas');
  menus.classList.toggle('heights');
  silang.classList.toggle('timbul');
  silang1.classList.toggle('ciluk');
});
menus.addEventListener('click', function(){
  bar.classList.toggle('gas');
  silang.classList.toggle('timbul');
  silang1.classList.toggle('ciluk');
});

//list
const home = document.querySelector('.rumah');
const about = document.querySelector('.abut');
const journey = document.querySelector('.podo');
const galeri = document.querySelector('.gl');
const skill = document.querySelector('.mahir');
const contact = document.querySelector('.bawah');


home.addEventListener('click',function(){
  menus.classList.toggle('heights');
});
about.addEventListener('click',function(){
  menus.classList.toggle('heights');
});

journey.addEventListener('click',function(){
  menus.classList.toggle('heights');
});

galeri.addEventListener('click',function(){
  menus.classList.toggle('heights');
});
skill.addEventListener('click',function(){
  menus.classList.toggle('heights');
});
contact.addEventListener('click',function(){
  menus.classList.toggle('heights');
});


//images
const poper = document.querySelector('.poper');
const cp = document.querySelector('.cp');
const kolase = document.querySelectorAll('.div1 img');
const cus = document.querySelector('.cuy');

kolase[0].onclick = () => {
    poper.classList.toggle('poperer');
    cp.classList.toggle('cps');
}
kolase[1].onclick = () => {
  poper.classList.toggle('poperer');
  cp.setAttribute('src', 'nu.webp');
  cp.classList.toggle('cps');
}
kolase[2].onclick = () => {
  poper.classList.toggle('poperer');
  cp.setAttribute('src', 'ipa.webp');
  cp.classList.toggle('cps');
}
kolase[3].onclick = () => {
  poper.classList.toggle('poperer');
  cp.setAttribute('src', 'enggres.webp');
  cp.classList.toggle('cps');
}
kolase[4].onclick = () => {
  poper.classList.toggle('poperer');
  cp.setAttribute('src', 'nu1.webp');
  cp.classList.toggle('cps');
}

cus.addEventListener('click', () => {
  poper.classList.toggle('poperer');
  cp.classList.toggle('cps');
})





//animasi 3d
const svg = document.querySelectorAll('.spr');
const nodes = Array.from(svg);
const arrSvg = [...nodes];

arrSvg.forEach(function(s){
  s.addEventListener('click', function(){
    s.classList.add('boom');
    
    setTimeout(function(){
      s.classList.remove('boom');
    },100)
  });
});


//Email connection
const war = document.querySelector('.war');
const form = document.getElementById('myform'),
      user_name = document.getElementById('name'),
      user_email = document.getElementById('email'),
      user_message = document.getElementById('message')
      
const sendEmail = (e) => {
  e.preventDefault();
  
 //cek apakah form kosong/terisi
 if(user_name.value === ''  ||
    user_email.value === '' ||
    user_message.value === '')
    {
      const eror = document.querySelector('.run');
      eror.classList.add('eropen');
      
      setTimeout(function(){
        eror.classList.remove('eropen');
      },5000)
 }else{
   //ServiceID - TemplateID - #form - publickey
   emailjs.sendForm('service_a8hsn9n','template_grlrlpi','#myform','Fcg22v4A_RxpKAAfb')
    .then(()=>{
      //show pesan berhasil
      war.classList.add('warOpen');
      setTimeout(function(){
        war.classList.remove('warOpen');
      },5000)
      
      //hapus pesan dari form
      form.reset();
    });
 }
}
form.addEventListener('submit', sendEmail);


//ligh theme
const light = document.querySelector('.sv');
light.onclick = function(){
  ubah();
}
//dark theme
const dark = document.querySelector('.moon');
dark.onclick = function(){
  ubah();
}
//function Theme
function ubah(){
  light.classList.toggle('sunclose');
  setTimeout(function(){
    dark.classList.toggle('moonUp');
  },100);
  
  document.body.classList.toggle('bdy')
  const atas = document.querySelector('.atas');
  const ft = document.querySelector('.ft');
  const txt1 = document.querySelector('#txt1');
  const status = document.querySelector('#status');
  const deskripsi = document.querySelector('.deskripsi');
  const more = document.querySelector('.more');
  const pendidikan = document.querySelector('.pendidikan');
  const j1 = document.querySelector('#j1');
  const d1 = document.querySelector('.edukasi1 .de1');
  const d2 = document.querySelector('.edukasi2 .de2');
  const d3 = document.querySelector('.edukasi3 .de3');
  const d4 = document.querySelector('.edukasi4 .de4');
  const me = document.querySelector('.me');
  const kemampuan = document.querySelector('.kemampuan');
  const mes = document.querySelector('.mes');
  const txtp = document.querySelectorAll('.pcx');
  const pcx = Array.from(txtp);
  const kontaks = document.querySelector('.kontak');
  const bgData = document.querySelector('.dataw');
  const mm = Array.from(document.querySelectorAll('#mm'));
  const sch = document.querySelector('#beda');
  const input = Array.from(document.querySelectorAll('form input'));
  const textArea = document.querySelector('form textarea');
  const panah = document.querySelector('.panah');
  const aray = document.querySelector('.ar');
  const foots = document.querySelector('.foots');
  const fp = document.querySelector('.foots p');
  const fi = Array.from(document.querySelectorAll('.is'));
  const sosial = Array.from(document.querySelectorAll('.d1'));
  const bloses = Array.from(document.querySelectorAll('.blos'));
  const klik = Array.from(document.querySelectorAll('.klik'));
  const tt = Array.from(document.querySelectorAll('.tt'));
  const ks = Array.from(document.querySelectorAll('.koding > .mbn'));
  const mantul = document.querySelector('.mantul');
  //main settings
  divsa.forEach((d) => {
    d.classList.toggle('edu');
    d.classList.remove('hv0');
  });
  mantul.classList.toggle('mntl');
  ks.forEach((kuy) => {
    kuy.classList.toggle('kss');
  })
  tt.forEach((t) => {
    t.classList.toggle('tes');
  })
  klik.forEach((k) => {
    k.classList.toggle('kak');
  })
  bloses.forEach((b) => {
    b.classList.toggle('bro');
  });
  sosial.forEach((s) => {
    s.classList.toggle('sor');
  })
  fi.forEach((ff) => {
    ff.classList.toggle('bdf');
  })
  fp.classList.toggle('ftr');
  foots.classList.toggle('fts');
  aray.classList.toggle('ara');
  panah.classList.toggle('ppnh');
  textArea.classList.toggle('tra');
  input.forEach(function(ins){
    ins.classList.toggle('mgc')
  })
  beda.classList.toggle('bygy');
  mm.forEach((m)=>{
    m.classList.toggle('mmm');
  })
  kontaks.classList.toggle('ktk');
  bgData.classList.toggle('bgD');
  arrSvg.forEach(function(pv){
    pv.classList.toggle('reform');
  })
  pcx.forEach(function(pc){
    pc.classList.toggle('msc');
  })
  kemampuan.classList.toggle('kmp');
  mes.classList.toggle('msc');
  atas.classList.toggle('atlas');
  ft.classList.toggle('fts');
  bar.classList.toggle('bl');
  silang.classList.toggle('sl');
  silang1.classList.toggle('sl1');
  home.classList.toggle('hm');
  about.classList.toggle('ab');
  journey.classList.toggle('jr');
  galeri.classList.toggle('gr')
  skill.classList.toggle('sekil');
  contact.classList.toggle('cn');
  txt1.classList.toggle('tx1');
  status.classList.toggle('stat');
  deskripsi.classList.toggle('des');
  more.classList.toggle('mr');
  pendidikan.classList.toggle('pdks');
  j1.classList.toggle('jt1');
  d1.classList.toggle('dos1');
  d2.classList.toggle('dos2');
  d3.classList.toggle('dos3');
  d4.classList.toggle('dos4');
  me.classList.toggle('mess');
  //
  const juaras = document.querySelectorAll('.juara');
  const winner = Array.from(juaras);
  const juara = [...winner];
  //
  const infos = document.querySelectorAll('.koding');
  const info = Array.from(infos);
  //
  const divs = document.querySelectorAll('.div1');
  const div = Array.from(divs);
 
  div.forEach(function(d){
    d.classList.toggle('divo');
  })
  info.forEach(function(i){
    i.classList.toggle('inf');
  });
  juara.forEach(function(j){
    j.classList.toggle('jw');
  });
}
const divsa = Array.from(document.querySelectorAll('.educations div'));
  divsa.forEach((d) => {
    d.addEventListener('click', () => {
      d.classList.toggle('hv0');
      
      setTimeout(function(){
        d.classList.toggle('hv0');
      },1000)
    });
  });
  
//scrollanimations
const sr = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
  useDelay: 'onload'
});

sr.reveal('#p1');
sr.reveal('#p2', {delay: 600})
sr.reveal('#p3', {delay: 800})
sr.reveal('#p4', {delay: 1000, origin: 'bottom'})
sr.reveal('#do1', {delay:1200, origin: 'bottom'})
sr.reveal('#do2', {delay:1400, origin: 'bottom'})
sr.reveal('#do3', {delay:1600, origin: 'bottom'})
sr.reveal('#do4', {delay: 1800, origin: 'bottom'})
sr.reveal('.tombol', {delay:2000, origin: 'bottom'})

//About me animations
sr.reveal('#txt1', {delay:400, origin: 'bottom'})
sr.reveal('.ii', {delay:600, origin: 'bottom'})
sr.reveal('#status', {delay:800, origin: 'bottom'})
sr.reveal('.deskripsi', {delay:1000, origin: 'bottom'})
sr.reveal('.tbls', {delay:1200, origin: 'bottom'})

//journey animations
sr.reveal('#j1', { origin: 'bottom'})
sr.reveal('.edukasi1', {delay:600, origin: 'right'})
sr.reveal('.edukasi2', {delay:800, origin: 'right'})
sr.reveal('.edukasi3', {delay:1200, origin: 'right'})
sr.reveal('.edukasi4', {delay:1400, origin: 'right'})

//gallery
sr.reveal('.me', {origin: 'bottom'})
sr.reveal('#ds1', {delay:600, origin: 'left'})
sr.reveal('#ds2', {delay:800, origin: 'right'})
sr.reveal('#ds3', {delay:1000, origin: 'left'})
sr.reveal('#ds4', {delay:1200, origin: 'right'})
sr.reveal('#ds5', {delay:1400, origin: 'left'})

//skills
sr.reveal('.mes', {origin: 'bottom'})
sr.reveal('.mantul', {delay:600, origin: 'bottom'})
sr.reveal('#dr1', {delay:1000, origin: 'bottom'})
sr.reveal('#dr2', {delay:1400, origin: 'bottom'})
sr.reveal('#dr3', {delay:1800, origin: 'bottom'})

//contact
sr.reveal('.kontak', {origin: 'bottom'})
sr.reveal('.dataw', {delay:600, origin: 'bottom'})
sr.reveal('#email', {delay:800, origin: 'bottom'})
sr.reveal('#name', {delay:1000, origin: 'bottom'})
sr.reveal('#message', {delay:1200, origin: 'bottom'})
sr.reveal('.tombol1', {delay:1600, origin: 'bottom'})

//auto-typejs
const typed = new Typed('.spn', {
  strings: ["Student", "Web Developer", "Darbuker", "Codinger", "Editor"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})