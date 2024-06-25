const rndEl = arr => arr[Math.floor(Math.random() * arr.length)];

const getAap = () => Math.random() < 0.2 ? '' : rndEl([
  'Groß',
  'Haupt',
  'Ober',
  'Unter',
]);

const getNoot = aap => Math.random() < 0.2 ? '' : rndEl([
  'Bau',
  'Brigade',
  'Fahnen',
  'Feld',
  'Gruppen',
  'Kanonnen',
  'Krad',
  'Kriegs',
  'Örtlicher',
  'Panzer',
  'Polizei',
  'Reichs',
  'Ritt',
  'Rotten',
  'Schar',
  'Stabs',
  'Staffel',
  'Standarten',
  'Stell',
  'Sturm',
  'Sturmbann',
  'Sturmschar',
  'Trupp',
  'Wacht',
  'Waffen',
].filter(Boolean));

const getMies = (aap, noot) => rndEl([
  'Anwärter',
  'Bewerber',
  'Chef',
  'Fahrer',
  'Fänrich',
  'Führer',
  'Füsilier',
  'Gefreiter',
  'Gendarm',
  'General',
  'Grenadier',
  aap === 'Haupt' ? null : 'Hauptmann',
  'Jäger',
  'Junker',
  noot === 'Kanonnen' ? null : 'Kanonier',
  'Kapitän',
  'Kommandant',
  'Leiter',
  'Leutnant',
  'Major',
  'Mann',
  'Meister',
  'Musketier',
  aap === 'Ober' || noot === 'Oberst' ? null : 'Oberst',
  'Offizier',
  'Richter',
  'Schütze',
  'Soldat',
  'Verteter',
  'Webel',
].filter(Boolean));

const getZus = (aap, noot, mies) => rndEl([
  noot === 'Trupp' ? null : 'truppe',
  noot === 'Staffel' ? null : 'staffel',
  'dienst',
  'korps',
].filter(Boolean));

const getWim = (aap, noot, mies) => Math.random() < 0.3 ? '' : ' der ' + rndEl([
  'Artillerie',
  'Infanterie',
  'Kavallerie',
  'Waffengattung',
  'Pioniere',
  noot === 'Panzer' ? null : 'Panzer' + getZus(aap, noot, mies),
  'Gebirgd' + getZus(aap, noot, mies),
  'Nachrichten' + getZus(aap, noot, mies),
  mies === 'Schutz' ? null : 'Schutz' + getZus(aap, noot, mies),
  'Verfügungs' + getZus(aap, noot, mies),
  'Sicherheits' + getZus(aap, noot, mies),
  'Ingenieur' + getZus(aap, noot, mies),
].filter(Boolean));

const getTitle = () => {
  const aap = getAap();
  const noot = getNoot(aap);
  const mies = getMies(aap, noot);
  const wim = getWim(aap, noot, mies);
  return (aap + noot + mies + wim).replace(/[a-zß][A-ZÖ]/g, (a) => {
    return a.toLowerCase();
  });
};

const generate = () => {
  document.getElementById('title').innerText = getTitle();
};

document.getElementById('button').addEventListener('click', generate);

generate();
