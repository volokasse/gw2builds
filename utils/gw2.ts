/// PROFESSIONS
export const GW2_PROFESSIONS: Record<number, string> = {
  1: 'Guardian',
  2: 'Warrior',
  3: 'Engineer',
  4: 'Ranger',
  5: 'Thief',
  6: 'Elementalist',
  7: 'Mesmer',
  8: 'Necromancer',
  9: 'Revenant'
};

// selects convert
export const GW2_PROFESSION_OPTIONS = Object.entries(GW2_PROFESSIONS).map(
  ([id, name]) => ({
    value: Number(id),
    label: name
  })
);

// get name
export function getProfessionLabel(id: number | null | undefined): string {
  if (!id)
    return 'Unknown';
  return GW2_PROFESSIONS[id] ?? 'Unknown';
};

/// STATS
export const GW2_STATS: Record<number, string> = {
  137: 'puissant',
  138: 'précis',
  139: 'vital',
  140: 'résistant',
  141: 'persistant',
  142: 'solide',
  144: 'ravageur',
  145: 'rajeunissant',
  146: 'vigoureux',
  147: 'rétablissant',
  148: 'opulent',
  149: 'robuste',
  150: 'absolu',
  151: 'pénétrant',
  152: 'aiguisé',
  153: 'chamanique',
  154: 'enragé',
  155: 'clérical',
  156: 'mage',
  157: 'valkyrien',
  158: 'chevaleresque',
  159: 'saccageur',
  160: 'nécrophage',
  161: 'berserker',
  162: 'militaire',
  175: 'curatif',
  176: 'néfaste',
  559: 'céleste',
  581: 'sanguinaire et enragé',
  583: 'cavalier',
  584: 'berserker',
  585: 'enragé',
  586: 'militaire',
  588: 'Céleste',
  591: 'berserker et valkyrien',
  592: 'enragé et officinal',
  593: 'céleste',
  594: 'enragé',
  595: 'enragé et officinal',
  596: 'sanguinaire et enragé',
  599: 'berserker',
  600: 'berserker et valkyrien',
  601: 'militaire',
  602: 'cavalier',
  605: 'officinal',
  616: 'cavalier',
  627: 'bienfaiteur',
  628: 'bienfaiteur',
  629: 'bienfaiteur',
  630: 'bienfaiteur',
  631: 'bienfaiteur',
  656: 'clérical',
  657: 'chevaleresque',
  658: 'saccageur',
  659: 'officinal',
  660: 'martial',
  661: 'clérical',
  662: 'chevaleresque',
  663: 'saccageur',
  664: 'officinal',
  665: 'martial',
  686: 'sentinelle',
  690: 'colonisateur',
  693: 'colonisateur',
  700: 'colonisateur',
  753: 'assassin',
  754: 'sanguinaire',
  755: 'chasseur',
  756: 'sanguinaire',
  799: 'zélote',
  1011: 'abandonné',
  1012: 'apostat',
  1013: 'survivant',
  1014: 'déserteur',
  1015: 'vagabond',
  1026: 'nomade',
  1030: 'bienfaiteur',
  1031: 'bienfaiteur',
  1032: 'du pourvoyeur',
  1035: 'sentinelle',
  1037: 'mage',
  1038: 'nécrophage',
  1040: 'assassin',
  1041: 'martial',
  1042: 'enragé',
  1043: 'officinal',
  1044: 'clérical',
  1046: 'berserker',
  1047: 'saccageur',
  1048: 'militaire',
  1050: 'cavalier',
  1051: 'chevaleresque',
  1052: 'céleste',
  1063: 'nomade',
  1064: 'sinistre',
  1065: 'sinistre',
  1066: 'nomade',
  1067: 'sinistre',
  1070: 'bienfaiteur',
  1071: 'chamanique',
  1073: 'sanguinaire',
  1075: 'nécrophage',
  1076: 'clérical',
  1077: 'berserker',
  1078: 'saccageur',
  1085: 'de pionnier',
  1097: 'chamanique',
  1098: 'croisé',
  1109: 'croisé',
  1111: 'maraudeur',
  1114: 'sanguinaire',
  1115: 'de pionnier',
  1118: 'vigilant',
  1119: 'valkyrien',
  1123: 'ménestrel',
  1125: 'commandant',
  1128: 'assassin',
  1130: 'vipérin',
  1131: 'commandant',
  1134: 'ménestrel',
  1139: 'vigilant',
  1140: 'voyageur',
  1145: 'maraudeur',
  1153: 'vipérin',
  1162: 'voyageur',
  1163: 'zélote',
  1220: 'Séraphin',
  1222: 'séraphin',
  1224: 'vipérin',
  1225: 'voyageur',
  1226: 'ménestrel',
  1227: 'commandant',
  1228: 'vigilant',
  1229: 'de pionnier',
  1230: 'Séraphin',
  1231: 'maraudeur',
  1232: 'croisé',
  1262: 'de pionnier',
  1263: 'maraudeur',
  1264: 'vigilant',
  1265: 'ménestrel',
  1267: 'commandant',
  1268: 'vipérin',
  1269: 'Séraphin',
  1270: 'voyageur',
  1271: 'croisé',
  1329: 'deuil',
  1337: 'de maréchal',
  1344: 'deuil',
  1345: 'du circaète',
  1363: 'du circaète',
  1364: 'de maréchal',
  1366: 'deuil',
  1367: 'du circaète',
  1374: 'de maréchal',
  1377: 'du circaète',
  1378: 'de maréchal',
  1379: 'deuil',
  1430: 'bienfaiteur',
  1436: 'du pourvoyeur',
  1484: 'de médecin du Fléau',
  1486: 'de médecin du Fléau',
  1538: 'devin',
  1539: 'devin',
  1549: 'de médecin du Fléau',
  1556: 'devin',
  1559: 'de médecin du Fléau',
  1566: 'devin',
  1681: 'draconique',
  1686: 'ritualiste',
  1687: 'draconique',
  1691: 'draconique',
  1694: 'ritualiste',
  1697: 'draconique',
  1706: 'ritualiste',
  1717: 'ritualiste',
  1826: 'du démolisseur',
  1827: 'du démolisseur'
};

// selects convert
type GW2StatOption = { value: number; label: string };
type GW2RelicOption = { value: number; label: string };
type GW2RuneOption = { value: number; label: string; };
type GW2SigilOption = { value: number; label: string; };

// Normalisation pour comparer sans accents / casse
const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const GW2_STATS_OPTIONS: GW2StatOption[] = (() => {
  const seen = new Set<string>();
  const deduped = Object.entries(GW2_STATS)
    .filter(([, name]) => {
      const key = norm(name)
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    .map(([id, name]) => ({ value: Number(id), label: name }));

  deduped.sort((a, b) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' }) || a.value - b.value);
  return deduped;
})()

// get name
export function getStatLabel(id: number | null | undefined): string {
  if (!id)
    return 'Unknown';
  return GW2_STATS[id] ?? 'Unknown';
};

type GW2Relic = { id: number, name: string, type: string, rarity: string, icon: string, details: any };
export const GW2_RELICS: GW2Relic[] = [
  {
      "id": 99965,
      "name": "Relique des ouailles",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2F7AE267BA29B35DEC7F2C0FCE5C30D806E31E0D\/3122350.png",
      "details": null
  },
  {
      "id": 99997,
      "name": "Relique d'Isgarren",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5FB808F04E427650A84031E46B632DC292A3583F\/3122354.png",
      "details": null
  },
  {
      "id": 100031,
      "name": "Relique de moine",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6C340014C525FEF8089AC6DAD03662637A5B07CA\/3122361.png",
      "details": null
  },
  {
      "id": 100048,
      "name": "Relique de glace",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5E0E012F921D3D5D364BFEFC04D7BEF1DC5B52F7\/3122353.png",
      "details": null
  },
  {
      "id": 100063,
      "name": "Relique de montée en puissance",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/755D9F3BA1C2C42CDAEBF59BBF4564B77ADC105D\/3592840.png",
      "details": null
  },
  {
      "id": 100074,
      "name": "Relique de Cérus",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/656FCA9408A0FFDB35A3CE20311E0F66423F026B\/3122337.png",
      "details": null
  },
  {
      "id": 100090,
      "name": "Relique du draconnier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F61EEC535059F1FA027049AB4DEFCD5465405DB7\/3122344.png",
      "details": null
  },
  {
      "id": 100115,
      "name": "Relique de Mabon",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/49481C31650D384B68A1BFB53DC1A39F2AE4AD56\/3122358.png",
      "details": null
  },
  {
      "id": 100144,
      "name": "Relique de guerrier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1D3CF82C05450A605921F6EB9D0AC23421C9CFA5\/3122375.png",
      "details": null
  },
  {
      "id": 100148,
      "name": "Relique de vitesse",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/15B07C1813B63DFD27A6A8A5E36CF1BC50DB0562\/3122369.png",
      "details": null
  },
  {
      "id": 100153,
      "name": "Relique de fractale",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B2D409644147BF18935A95A52505ABCB9EECE142\/3122351.png",
      "details": null
  },
  {
      "id": 100158,
      "name": "Relique du Mirage",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5FCA620E77D3D5022ADC70C1191F0B154AB13827\/3122360.png",
      "details": null
  },
  {
      "id": 100165,
      "name": "Relique de nécromant",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B20C589B0915915F5AB55BDA6EC52670B29706F2\/3122362.png",
      "details": null
  },
  {
      "id": 100177,
      "name": "Relique de Peitha",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/949A6A4179F514FCDEF3AC3D9C292B38D5E0047D\/3122365.png",
      "details": null
  },
  {
      "id": 100194,
      "name": "Relique du Tissesort",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/12997110B0509463DD9F1364A92493B2C4309BE1\/3122377.png",
      "details": null
  },
  {
      "id": 100219,
      "name": "Relique du héraut",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DE62250A48F802DD09A1FAFF0D2BA804EA29A3B9\/3122352.png",
      "details": null
  },
  {
      "id": 100230,
      "name": "Relique de Krait",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/645EFCBFFBB7B1C6630CBB7C0FB268CA27B703AC\/3122355.png",
      "details": null
  },
  {
      "id": 100238,
      "name": "Relique de la liche",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/045D16259918EFA90A76B4D1B1400AA8D9CC0D4B\/3592837.png",
      "details": null
  },
  {
      "id": 100248,
      "name": "Relique de la Citadelle",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B21C5A6DFCDB0A729358A22CA76547150E7C541E\/3122339.png",
      "details": null
  },
  {
      "id": 100262,
      "name": "Relique de feux d'artifice",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2999CCF7C94267B2EE3DDA7459050864622927C9\/3122349.png",
      "details": null
  },
  {
      "id": 100299,
      "name": "Relique de guerrier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1D3CF82C05450A605921F6EB9D0AC23421C9CFA5\/3122375.png",
      "details": null
  },
  {
      "id": 100311,
      "name": "Relique d'Ogre",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/633231B05DC3D1D44003DAA891400C4624180D17\/3592838.png",
      "details": null
  },
  {
      "id": 100345,
      "name": "Relique du fracasseur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/29FE690460A037C7FAC3C71903BA1EBECB204012\/3122341.png",
      "details": null
  },
  {
      "id": 100368,
      "name": "Relique du Fléau",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0802B36898A6EB0C77D20FD4F3DFD0A2270A3ECD\/3122368.png",
      "details": null
  },
  {
      "id": 100385,
      "name": "Relique du Centaure",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/59551CFA6F4AB3D678370651ABF20D5F69B949D5\/3122336.png",
      "details": null
  },
  {
      "id": 100388,
      "name": "Relique de la Garde astrale",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/57A961A8ADFE279BC4F124A40CC4B5646BC8035F\/3161446.png",
      "details": null
  },
  {
      "id": 100390,
      "name": "Relique d'antitoxine",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/61C74AAFED48CF9AD4BBCAD89F902654EA02B2AE\/3122331.png",
      "details": null
  },
  {
      "id": 100400,
      "name": "Relique du Sans-soleil",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CEF1E6DA2DBF143661DF26E668034A621812B61A\/3122370.png",
      "details": null
  },
  {
      "id": 100403,
      "name": "Relique de golemancien",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/13412697BB6AD89F2E6ED97A750873C0BB35AA9A\/3592835.png",
      "details": null
  },
  {
      "id": 100411,
      "name": "Relique de fantassin",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/500CB9B12FED6948EB74FAF299726007002BDFBA\/3122372.png",
      "details": null
  },
  {
      "id": 100429,
      "name": "Relique de pitié",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1AA33B5654D3E7F91B9065BA6D0F1EB6AA755AFF\/3122359.png",
      "details": null
  },
  {
      "id": 100432,
      "name": "Relique d'Akeem",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/594C437E9606A167F4F372BCEB0C2B7C7828037B\/3122330.png",
      "details": null
  },
  {
      "id": 100435,
      "name": "Relique de terre",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/EBB3060FF2E9A10CECC3F1B2CAC0213AE9D93337\/3592833.png",
      "details": null
  },
  {
      "id": 100442,
      "name": "Relique de Dwayna",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CBBD4FAFCC3568ACA04F9901162FE7C0747C1E9B\/3122346.png",
      "details": null
  },
  {
      "id": 100448,
      "name": "Relique de la Citadelle",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B21C5A6DFCDB0A729358A22CA76547150E7C541E\/3122339.png",
      "details": null
  },
  {
      "id": 100450,
      "name": "Relique du chronomancien",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C209ABF01D7429EC09354E2E0BBF9DB14EBDD613\/3122338.png",
      "details": null
  },
  {
      "id": 100453,
      "name": "Relique de l'Incendiaire",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/4E4F4AA81DB63D9D9BB4BF3757D0750E935701F7\/3122348.png",
      "details": null
  },
  {
      "id": 100455,
      "name": "Relique de durabilité",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A8F61493030863CAB537780398D64D80554D959D\/3122345.png",
      "details": null
  },
  {
      "id": 100461,
      "name": "Relique de Lyhr",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/FE580A90C9E4513D062A148045F933C7F3C557E3\/3122357.png",
      "details": null
  },
  {
      "id": 100479,
      "name": "Relique de corsaire",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/9CE01CF33B943BCC3FABD8491073DE0AD63F340C\/3592839.png",
      "details": null
  },
  {
      "id": 100527,
      "name": "Relique de bagarreur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2B5297A932F55DA3BDDD0A39C9CB0D9CF70244A1\/3122334.png",
      "details": null
  },
  {
      "id": 100531,
      "name": "Relique d'eau",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A202CF0CF4314C049B16A89A595CCC9534B0A90E\/3122376.png",
      "details": null
  },
  {
      "id": 100542,
      "name": "Relique de Cavalier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C3AFC50F654E2749ADD9033CE007033F6F9B0D7A\/3122335.png",
      "details": null
  },
  {
      "id": 100557,
      "name": "Relique de la Tour du sorcier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0C0EE407B9DAA44438ED6C2DCDA4EEB30953DF1B\/3122378.png",
      "details": null
  },
  {
      "id": 100561,
      "name": "Relique d'aventurier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/9A76D8C27FCAB8F66D0DC531906808B134D80EAD\/3122328.png",
      "details": null
  },
  {
      "id": 100562,
      "name": "Relique de durabilité",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A8F61493030863CAB537780398D64D80554D959D\/3122345.png",
      "details": null
  },
  {
      "id": 100579,
      "name": "Relique des Cauchemars",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/74940C36779745CBA9DDD56CDF6CBAC1CEA8179F\/3122363.png",
      "details": null
  },
  {
      "id": 100580,
      "name": "Relique de nécromant",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B20C589B0915915F5AB55BDA6EC52670B29706F2\/3122362.png",
      "details": null
  },
  {
      "id": 100614,
      "name": "Relique de dérobade",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/19296379D120EF9FF10EE0B0CDD7711DA5E7A9AF\/3122347.png",
      "details": null
  },
  {
      "id": 100625,
      "name": "Relique de charisme",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/077C30D957D30B0D282BB21199A193A2D74971DF\/3122356.png",
      "details": null
  },
  {
      "id": 100633,
      "name": "Relique des ouailles",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2F7AE267BA29B35DEC7F2C0FCE5C30D806E31E0D\/3122350.png",
      "details": null
  },
  {
      "id": 100659,
      "name": "Relique d'eau",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A202CF0CF4314C049B16A89A595CCC9534B0A90E\/3122376.png",
      "details": null
  },
  {
      "id": 100676,
      "name": "Relique de vampirisme",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/349D3B9098A1EB445E00C45E70B892E8CFE3762C\/3592842.png",
      "details": null
  },
  {
      "id": 100693,
      "name": "Relique des Affligés",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3B1DA625E3DF0591087E62F12E5301C1D8D6EDC0\/3122329.png",
      "details": null
  },
  {
      "id": 100694,
      "name": "Relique de l'invasion invisible",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0CAF5ACE9D4ABEFF3EF2DE0DB47D57A8AB3CABB3\/3122373.png",
      "details": null
  },
  {
      "id": 100739,
      "name": "Relique du faucheur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/AFDAA23D3C61F202225DDFA7C17F420C5368BBB8\/3122366.png",
      "details": null
  },
  {
      "id": 100752,
      "name": "Relique de la meute",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/26503D1FF7BA354058789E371992A7500B3AA89B\/3122364.png",
      "details": null
  },
  {
      "id": 100775,
      "name": "Relique de Vass",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/21D7FDF1DD4EAD33DBC01F11D80E48AD3370FDE6\/3122374.png",
      "details": null
  },
  {
      "id": 100794,
      "name": "Relique de résistance",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C3A39C916063067E190EE5D42D6CAC2018385F44\/3122367.png",
      "details": null
  },
  {
      "id": 100849,
      "name": "Relique d'aristocratie",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/BCC01F0B6616FE26ED4BE159532A6A6FBD0EA2D8\/3122332.png",
      "details": null
  },
  {
      "id": 100886,
      "name": "Relique de dérobade",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/19296379D120EF9FF10EE0B0CDD7711DA5E7A9AF\/3122347.png",
      "details": null
  },
  {
      "id": 100893,
      "name": "Relique des Zéphyrites",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/070E32046C250E32DA76F2CBDFC504D6C0AB0344\/3122379.png",
      "details": null
  },
  {
      "id": 100908,
      "name": "Relique de l'Holographiste",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0976F60805023D2F14DA6CC72F55F3D64407C7AF\/3592836.png",
      "details": null
  },
  {
      "id": 100916,
      "name": "Relique de voleur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3523AC08EB04347CF371E9A91F4B985D12FB4ED3\/3122371.png",
      "details": null
  },
  {
      "id": 100924,
      "name": "Relique du Sniper",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/060151B961CE56CB9546E7B6AF33B0A318426372\/3122342.png",
      "details": null
  },
  {
      "id": 100934,
      "name": "Relique du Défenseur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/E854AFDE03F40ED335C0A30DE90BD9973612BD75\/3122343.png",
      "details": null
  },
  {
      "id": 100942,
      "name": "Relique de Dagda",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CA28F7BFEA1B695DD19204E455BA270D334EE307\/3122340.png",
      "details": null
  },
  {
      "id": 100947,
      "name": "Relique de feux d'artifice",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2999CCF7C94267B2EE3DDA7459050864622927C9\/3122349.png",
      "details": null
  },
  {
      "id": 100976,
      "name": "Relique de voleur",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3523AC08EB04347CF371E9A91F4B985D12FB4ED3\/3122371.png",
      "details": null
  },
  {
      "id": 101116,
      "name": "Relique de Febe",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3B063D0B0BA20A0530086595F367F0149D9679F2\/3187628.png",
      "details": null
  },
  {
      "id": 101139,
      "name": "Relique du Roi de minuit",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C0602C3D27B10AC815D4B9F0DF0E4C3D23D12E9F\/3187630.png",
      "details": null
  },
  {
      "id": 101166,
      "name": "Relique de la Reine des démons",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D0C6F322473F2A0F6C65FBD3B21733777BB14015\/3187627.png",
      "details": null
  },
  {
      "id": 101191,
      "name": "Relique de Nourys",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/9B47CEBB551B7C5E7A961AB45361E292074E0823\/3187632.png",
      "details": null
  },
  {
      "id": 101198,
      "name": "Relique de Nayos",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/EA382BAFD541080F71D5530893CC7E069165EA0C\/3187631.png",
      "details": null
  },
  {
      "id": 101268,
      "name": "Relique de Karakosa",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DD034A0B53355503350F07CCFFE5CC06A90F41D9\/3187629.png",
      "details": null
  },
  {
      "id": 101439,
      "name": "Relique de pitié",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101441,
      "name": "Relique de dérobade",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101442,
      "name": "Relique de vitesse",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101447,
      "name": "Relique de la meute",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101452,
      "name": "Relique de l'Incendiaire",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101453,
      "name": "Relique des Cauchemars",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101461,
      "name": "Relique de charisme",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101465,
      "name": "Relique de nécromant",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101466,
      "name": "Relique de résistance",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101467,
      "name": "Relique de la Reine des démons",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101472,
      "name": "Relique du faucheur",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101474,
      "name": "Relique d'eau",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101487,
      "name": "Relique d'antitoxine",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101489,
      "name": "Relique de fractale",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101491,
      "name": "Relique de Dagda",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101492,
      "name": "Relique de Vass",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101493,
      "name": "Relique des Affligés",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101500,
      "name": "Relique de Cérus",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101503,
      "name": "Relique de Nourys",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101504,
      "name": "Relique de durabilité",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101509,
      "name": "Relique du héraut",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101511,
      "name": "Relique d'aventurier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101513,
      "name": "Relique du Défenseur",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101514,
      "name": "Relique de Dwayna",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101526,
      "name": "Relique du Tissesort",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101527,
      "name": "Relique des ouailles",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101534,
      "name": "Relique de Cavalier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101539,
      "name": "Relique d'aristocratie",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101541,
      "name": "Relique du Sans-soleil",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101545,
      "name": "Relique de guerrier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101546,
      "name": "Relique de Karakosa",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101549,
      "name": "Relique du chronomancien",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101554,
      "name": "Relique de fantassin",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101563,
      "name": "Relique de Febe",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101564,
      "name": "Relique de feux d'artifice",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101571,
      "name": "Relique de l'invasion invisible",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101573,
      "name": "Relique d'Akeem",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101580,
      "name": "Relique de voleur",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101581,
      "name": "Relique du Mirage",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101582,
      "name": "Relique légendaire",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101586,
      "name": "Relique de la Tour du sorcier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101590,
      "name": "Relique du draconnier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101600,
      "name": "Relique de bagarreur",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101605,
      "name": "Relique de Lyhr",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101607,
      "name": "Relique du Centaure",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101608,
      "name": "Relique de glace",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101611,
      "name": "Relique de Peitha",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101618,
      "name": "Relique des Zéphyrites",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101619,
      "name": "Relique de la Garde astrale",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101621,
      "name": "Relique du Roi de minuit",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101627,
      "name": "Relique de Nayos",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101630,
      "name": "Relique de moine",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101634,
      "name": "Relique du Fléau",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101637,
      "name": "Relique du Sniper",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101640,
      "name": "Relique de Krait",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101643,
      "name": "Relique de Mabon",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101644,
      "name": "Relique du fracasseur",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101647,
      "name": "Relique de la Citadelle",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101649,
      "name": "Relique d'Isgarren",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101731,
      "name": "Relique des généraux jumeaux",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101737,
      "name": "Relique de la fondation",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/FD9FE6B8CBBD44132D6DBCA7C2E92CF4C69D6EDC\/3302016.png",
      "details": null
  },
  {
      "id": 101767,
      "name": "Relique des généraux jumeaux",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CCEC5A2802D7B7D6C891EA730B5733ADD912B902\/3302019.png",
      "details": null
  },
  {
      "id": 101776,
      "name": "Relique de la fondation",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101801,
      "name": "Relique de Mosyn",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CAB064E2F11609D2309E356062BA93107F9F605E\/3302017.png",
      "details": null
  },
  {
      "id": 101860,
      "name": "Relique de Mosyn",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101863,
      "name": "Relique du sorcier",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/AC943ADC1ABD046294600DDBEFE8636FF90C4EEF\/3302018.png",
      "details": null
  },
  {
      "id": 101908,
      "name": "Relique du sorcier",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101917,
      "name": "Relique du Guide",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101943,
      "name": "Relique du Guide",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7D28503433AD96CEA902BBCD0411C9BE1D2505F4\/3302020.png",
      "details": null
  },
  {
      "id": 101944,
      "name": "Relique de Zakiros",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 101955,
      "name": "Relique de Zakiros",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5A5B5D3A4D9DD01F0A115030270A0A6EA353CC65\/3302021.png",
      "details": null
  },
  {
      "id": 102199,
      "name": "Relique du porte-fléau",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/286C60AC6FA239B0070293039091A44476A35E90\/3375219.png",
      "details": null
  },
  {
      "id": 102245,
      "name": "Relique d'atrocité",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F1F3033EA7780C093A651253ACB92E415C0525F6\/3375218.png",
      "details": null
  },
  {
      "id": 102442,
      "name": "Relique des rivières",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 102595,
      "name": "Relique de l'antienne de la tempête",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/53B8A123D07CC679364EF4CF4BD7537624320919\/3375223.png",
      "details": null
  },
  {
      "id": 102787,
      "name": "Relique d'atrocité",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 102877,
      "name": "Relique de la Griffe",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 102896,
      "name": "Relique du porte-fléau",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103015,
      "name": "Relique des rivières",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/4C054AF70F0CE14E46B159686F1AA70A320A1E07\/3375221.png",
      "details": null
  },
  {
      "id": 103262,
      "name": "Relique de l'antienne de la tempête",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103424,
      "name": "Relique des lamentations",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F943C04CD27C463AB167FDF49F9CCC3E27F0AD18\/3375222.png",
      "details": null
  },
  {
      "id": 103507,
      "name": "Relique des lamentations",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103574,
      "name": "Relique de la Griffe",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/19B5DB56E495C70754A8BE3621CADC0FD7402845\/3375220.png",
      "details": null
  },
  {
      "id": 103763,
      "name": "Relique des geysers",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CEDCA7097F41AD0715322E440ABDCE1E6FF49178\/3441971.png",
      "details": null
  },
  {
      "id": 103811,
      "name": "Relique de la vapeur fulminante",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103829,
      "name": "Relique des geysers",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103872,
      "name": "Relique du mont Balrior",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/49A8520BDB6C5A7BA90832DB9406677473A6932F\/3441973.png",
      "details": null
  },
  {
      "id": 103901,
      "name": "Relique de la marée des Brumes",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2ADA1A4509057D7B3854EEE9149A0F45CCD0EAA2\/3441972.png",
      "details": null
  },
  {
      "id": 103923,
      "name": "Relique de la ruche",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103924,
      "name": "Relique de la réunification",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103941,
      "name": "Relique de la marée des Brumes",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 103977,
      "name": "Relique de la ruche",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0D45B8A4A1D8D7FF4BAE196091C76A961D3F9621\/3441970.png",
      "details": null
  },
  {
      "id": 103984,
      "name": "Relique de la réunification",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DDC5C072A8E0566CFFF1200404E529DADCD27CF3\/3441974.png",
      "details": null
  },
  {
      "id": 104022,
      "name": "Relique de la vapeur fulminante",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/23B0F0A5BF05E05C9F527BF7EB4962C9F49C6F42\/3441975.png",
      "details": null
  },
  {
      "id": 104035,
      "name": "Relique du mont Balrior",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104241,
      "name": "Relique de l'aigle",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DFF4EB43AD0803F60D105658052321A0BE1AF02C\/3592832.png",
      "details": null
  },
  {
      "id": 104249,
      "name": "Relique de vampirisme",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104256,
      "name": "Relique d'altruisme",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DA14C9FCAB15E43203F1FEEBE432C3B3FBAB00DD\/3592831.png",
      "details": null
  },
  {
      "id": 104274,
      "name": "Relique de montée en puissance",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104277,
      "name": "Relique de la liche",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104296,
      "name": "Relique des épines",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104308,
      "name": "Relique de feu",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104311,
      "name": "Relique de corsaire",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104334,
      "name": "Relique d'Ogre",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104383,
      "name": "Relique de terre",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104390,
      "name": "Relique de l'Holographiste",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104413,
      "name": "Relique de l'aigle",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104416,
      "name": "Relique de golemancien",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104424,
      "name": "Relique des épines",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B6166933459C27FE500FCC23B572A7AE2A0F4DDA\/3592841.png",
      "details": null
  },
  {
      "id": 104491,
      "name": "Relique d'altruisme",
      "type": "Relic",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/08DED07BF6DF37E69A08D1C49D9C45D81BD8A5CA\/3255567.png",
      "details": null
  },
  {
      "id": 104501,
      "name": "Relique de feu",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/00E5051DCC0EDD58395DF9CEA3456466EA4FD347\/3592834.png",
      "details": null
  },
  {
      "id": 104733,
      "name": "Relique du Prodige",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/AD0AE5035A197220507642E1169ED55E0C58A29D\/3629400.png",
      "details": null
  },
  {
      "id": 104800,
      "name": "Relique de la pierre de sang",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A7327A7EDB4705EA05261110526D72AFEAF7DAB4\/3629397.png",
      "details": null
  },
  {
      "id": 104848,
      "name": "Relique de Bava Nisos",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/213C437140552326BD633D1AFF150B48DF2EB544\/3629396.png",
      "details": null
  },
  {
      "id": 104849,
      "name": "Relique de l'agonie",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7060CF69EFEB7A99150F2F1A7E0E1F1D2D9ED0D2\/3629395.png",
      "details": null
  },
  {
      "id": 104928,
      "name": "Relique de la cité vivante",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6CAF0358FBD9DDD84AB3302E2D67329A3AA83DEC\/3629398.png",
      "details": null
  },
  {
      "id": 104938,
      "name": "Relique de la cité vivante",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6CAF0358FBD9DDD84AB3302E2D67329A3AA83DEC\/3629398.png",
      "details": null
  },
  {
      "id": 104994,
      "name": "Relique du Feu-de-Brume",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/FFCB62CF19806066D21C0EA1BA43986C0DA2B6F3\/3629399.png",
      "details": null
  },
  {
      "id": 105585,
      "name": "Relique du premier revenant",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7DA30BCFB0E0A04A5D3DFE3D25DAF142D90E1596\/3709380.png",
      "details": null
  },
  {
      "id": 105652,
      "name": "Relique de Castora",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/349EA123E7D870C4199AB268250973FAEC0ADC94\/3709379.png",
      "details": null
  },
  {
      "id": 106206,
      "name": "Relique de l'Étranger des Brumes",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2DA75566B948AADFAB0CCF2198F205AF9AE82031\/3709381.png",
      "details": null
  },
  {
      "id": 106221,
      "name": "Relique de la reine pirate",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6C7D53936BFC0DFD52BACDD9A2C7F0909E424F0D\/3709382.png",
      "details": null
  },
  {
      "id": 106355,
      "name": "Relique du vaurien",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0B58A2B6F00D9657EE141001A8AA240DDBDE300D\/3709383.png",
      "details": null
  },
  {
      "id": 106364,
      "name": "Relique du biomancien",
      "type": "Relic",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5CF5F504B24F210BE209053D2134B89072FC4F29\/3709378.png",
      "details": null
  }
];

export const GW2_STATS_RELICS: GW2RelicOption[] = (() => {
  const seen = new Set<string>();
  const deduped = GW2_RELICS
    .filter((relic) => {
      if (!relic || !relic.name)
        return false;
      if (relic.name.includes('légendaire'))
        return false;

      const key = norm(relic.name);
      if (seen.has(key))
        return false;

      seen.add(key);
      return true;
    })
    .map((relic) => ({
      value: relic.id,
      label: relic.name.replace('Relique ', ''),
    }));

  deduped.sort((a, b) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' }) || a.value - b.value);
  return deduped;
})();

type GW2Runes = { id: number, name: string, type: string, rarity: string, icon: string, details: any };
export const GW2_RUNES: GW2Runes[] = [
  {
      "id": 24721,
      "name": "Rune de l'aigle mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/A46D7A04B79BC40141929FF9B1C2FAFA2A7F4025\/221071.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +10",
              "Férocité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'aigle"
      }
  },
  {
      "id": 24722,
      "name": "Rune de l'aigle majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/B8565FC81408905306730C07E4311309D4F612F0\/221072.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +15",
              "Férocité +21",
              "Précision +30",
              "Férocité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'aigle"
      }
  },
  {
      "id": 24723,
      "name": "Rune de l'aigle supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2966CB3D97E85EB0E4C33AFB6D1FB63D7304EC97\/220700.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Férocité +35",
              "Précision +50",
              "Férocité +65",
              "Précision +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'aigle"
      }
  },
  {
      "id": 24724,
      "name": "Rune de Rata Sum mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/B72268073DB82060A15922915260335A950CD3FC\/221073.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +10",
              "Durée d'Empoisonnement +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Rata Sum"
      }
  },
  {
      "id": 24725,
      "name": "Rune de Rata Sum majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/4204FC47E0B47E9763592139431DB9B7C514C00B\/221074.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +15",
              "Durée d'Empoisonnement +6%",
              "Précision +30",
              "Durée de Faiblesse +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Rata Sum"
      }
  },
  {
      "id": 24726,
      "name": "Rune de Rata Sum supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1434C3CEC42A4F0D4861F013B899D9CBFE91E836\/220720.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Durée d'Empoisonnement +10%",
              "Précision +50",
              "Durée de Faiblesse +20%",
              "Précision +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Rata Sum"
      }
  },
  {
      "id": 24727,
      "name": "Rune d'Hoelbrak mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/1179C2C97DDDBAAE3F3E23493759F1010224CC09\/221075.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Pouvoir +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Hoelbrak"
      }
  },
  {
      "id": 24728,
      "name": "Rune d'Hoelbrak majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/797FC80F676E93979BB20AF5F229AB0EB16E5260\/221076.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Pouvoir +6%",
              "Puissance +30",
              "Durée d'altération subie -6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Hoelbrak"
      }
  },
  {
      "id": 24729,
      "name": "Rune d'Hoelbrak supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/150204B4552ED82CD15204ACC7360198F51F6C13\/220708.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée d'altération subie -10%",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Hoelbrak"
      }
  },
  {
      "id": 24730,
      "name": "Rune de divinité mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/37FDB69F2F0B6B7AB09031C830B8C2680B684217\/221077.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +3",
              "Toutes les statistiques +4"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de divinité"
      }
  },
  {
      "id": 24731,
      "name": "Rune de divinité majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/180B220095B0529703B17BD928BFFAE62B435B99\/221078.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +5",
              "Toutes les statistiques +6",
              "Toutes les statistiques +7",
              "Toutes les statistiques +8"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de divinité"
      }
  },
  {
      "id": 24732,
      "name": "Rune de divinité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7431F5E2780106172D4A97C863D80BDAAC681FBF\/220697.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Toutes les statistiques +18"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de divinité"
      }
  },
  {
      "id": 24733,
      "name": "Rune du Bosquet mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/C4FC74F5CED7E2617BF077112E486AFB910F7409\/221079.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Durée de Protection +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Bosquet"
      }
  },
  {
      "id": 24734,
      "name": "Rune du Bosquet majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/FC593CD611461F0C5AD600313ADC4A67DFD4C118\/221054.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Durée de Protection +6%",
              "Guérison +30",
              "Durée de Protection +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Bosquet"
      }
  },
  {
      "id": 24735,
      "name": "Rune du Bosquet supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1A4B11313EA4B3076232AAA10D0F2F62A50A6179\/220707.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée de Protection +10%",
              "Guérison +50",
              "Durée de Protection +20%",
              "Guérison +100",
              "Durée de Protection +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Bosquet"
      }
  },
  {
      "id": 24736,
      "name": "Rune de profanation mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/AA3AF67FAE0FEE05EE0357B8C0DA7DB05CF69CB6\/221080.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de profanation"
      }
  },
  {
      "id": 24737,
      "name": "Rune de profanation majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/07D40C246503D3E71AC8CC0F3A729973031EF170\/221081.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Vitalité +21",
              "Dégâts par altération +30",
              "Vitalité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de profanation"
      }
  },
  {
      "id": 24738,
      "name": "Rune de profanation supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C9BEBEB9D8ADA51C1D9DEB67A3C079B5037E9833\/221082.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Vitalité +35",
              "Dégâts par altération +50",
              "Vitalité +65",
              "Dégâts par altération +100",
              "Durée d'Empoisonnement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de profanation"
      }
  },
  {
      "id": 24739,
      "name": "Rune de la Citadelle mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/D4EFA21D1AE400414926D605ED38F0BB0EC64100\/221083.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Fureur +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Citadelle"
      }
  },
  {
      "id": 24740,
      "name": "Rune de la Citadelle majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/CD0D015F43E455EA3D341DE27AD9A035A503C408\/221084.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Fureur +6%",
              "Puissance +30",
              "Durée de Fureur +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Citadelle"
      }
  },
  {
      "id": 24741,
      "name": "Rune de la Citadelle supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2647384A4CFBDA013F974944C501E19D092B37A8\/220696.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Fureur +10%",
              "Puissance +50",
              "Durée de Fureur +20%",
              "Puissance +100",
              "Durée de Fureur +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Citadelle"
      }
  },
  {
      "id": 24742,
      "name": "Rune de terre mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/105BEB076265E3AB434D05E80D6C5B3524C251B8\/221085.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Durée de Protection +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de terre"
      }
  },
  {
      "id": 24743,
      "name": "Rune de terre majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/44D423DB2A94017CE208BB99967FB89371081213\/221086.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Durée de Protection +6%",
              "Robustesse +30",
              "Durée de Protection +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de terre"
      }
  },
  {
      "id": 24744,
      "name": "Rune de terre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/93A53AB1F304354ED1981AB465BCDD51B2F4D857\/220701.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Protection +10%",
              "Robustesse +50",
              "Durée de Protection +20%",
              "Robustesse +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de terre"
      }
  },
  {
      "id": 24745,
      "name": "Rune de feu mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/ECD5C90BE62709F37CFBDB4B09ADAFAA5F3F94A4\/221087.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Pouvoir +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de feu"
      }
  },
  {
      "id": 24746,
      "name": "Rune de feu majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/F67ED111FF4DCCE50C1102080C92371577FB364D\/221088.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Pouvoir +6%",
              "Puissance +30",
              "Durée de Pouvoir +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de feu"
      }
  },
  {
      "id": 24747,
      "name": "Rune de feu supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6967534DA6E09150241DC411B0F4A4B415520FF7\/220702.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de feu"
      }
  },
  {
      "id": 24748,
      "name": "Rune d'air mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/B94E38CBC5B5BD10E79B35C40F6D59ACF358C493\/221089.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +10",
              "Durée de Rapidité +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'air"
      }
  },
  {
      "id": 24749,
      "name": "Rune d'air majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/14761994A9B03C644D92B171E523BEA5EE0BF9E7\/221090.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +15",
              "Durée de Rapidité +6%",
              "Férocité +30",
              "Durée de Rapidité +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'air"
      }
  },
  {
      "id": 24750,
      "name": "Rune d'air supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0A0CF1DD44A26CCC6BF9ADEE623DCED5070901BB\/220693.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Rapidité +10%",
              "Férocité +50",
              "Durée de Rapidité +20%",
              "Férocité +100",
              "Durée de Rapidité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'air"
      }
  },
  {
      "id": 24751,
      "name": "Rune de glace mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/3B046CA10C0271EB96B42E232999542FF2372B7E\/221091.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Durée de Givre +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de glace"
      }
  },
  {
      "id": 24752,
      "name": "Rune de glace majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/034B1CA4A91154AE59F3AA6BDD029EB43A9CA6CB\/221092.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Durée de Givre +6%",
              "Vitalité +30",
              "Durée de Givre +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de glace"
      }
  },
  {
      "id": 24753,
      "name": "Rune de glace supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B34492445E5F38655FF49B7FB9EFD4DB03A37A90\/220709.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée de Givre +10%",
              "Vitalité +50",
              "Durée de Givre +20%",
              "Vitalité +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de glace"
      }
  },
  {
      "id": 24754,
      "name": "Rune d'Ogre mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/F30630104F4D982F3FF0297C0E7AABA9B844DBBC\/221093.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Férocité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Ogre"
      }
  },
  {
      "id": 24755,
      "name": "Rune d'Ogre majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/F70EF6D9C39A676A6FA7054C78C35A052A4E3C09\/221094.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Férocité +21",
              "Puissance +30",
              "Férocité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Ogre"
      }
  },
  {
      "id": 24756,
      "name": "Rune d'Ogre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/136590B36FFC2053D135743B063405C9A54A9E6A\/220716.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Ogre"
      }
  },
  {
      "id": 24757,
      "name": "Rune de mort-vivant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D32651C75E09C23F0ECD234CE8B1C666E032296C\/220723.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Robustesse +35",
              "Dégâts par altération +50",
              "Robustesse +65",
              "Dégâts par altération +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de mort-vivant"
      }
  },
  {
      "id": 24758,
      "name": "Rune de mort-vivant majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/C659B4F92DCBF906A091E854F85A6968C1C14BE4\/221095.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Robustesse +21",
              "Dégâts par altération +30",
              "Robustesse +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de mort-vivant"
      }
  },
  {
      "id": 24759,
      "name": "Rune de mort-vivant mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/43FB5A05AD1828090A1818D6CD2E04B30BD50DE6\/221096.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Robustesse +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de mort-vivant"
      }
  },
  {
      "id": 24760,
      "name": "Rune de Krait mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/2F1C0BA94DADC4329467CCD4C2DAA4B7D5E77566\/221097.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Saignement +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Krait"
      }
  },
  {
      "id": 24761,
      "name": "Rune de Krait majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/D01507065265FA223590C22FDEFE727030301AFD\/221098.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Saignement +6%",
              "Dégâts par altération +30",
              "Durée de Saignement +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Krait"
      }
  },
  {
      "id": 24762,
      "name": "Rune de Krait supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F0932EF967413023BE0CC1EEF5E2536B2764E65A\/220711.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Saignement +10%",
              "Dégâts par altération +50",
              "Durée de Saignement +20%",
              "Dégâts par altération +100",
              "Durée de Saignement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Krait"
      }
  },
  {
      "id": 24763,
      "name": "Rune de Balthazar mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/0D402432F053666F99590DD6AA661E939A256D54\/221099.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Brûlure +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Balthazar"
      }
  },
  {
      "id": 24764,
      "name": "Rune de Balthazar majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/2AEA022CAA75AF7907C9407E76544308795B2990\/221100.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Brûlure +6%",
              "Dégâts par altération +30",
              "Durée de Brûlure +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Balthazar"
      }
  },
  {
      "id": 24765,
      "name": "Rune de Balthazar supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7CEF770BE7E6A5E507B6D98018155CD2395FAD18\/220694.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Brûlure +10%",
              "Dégâts par altération +50",
              "Durée de Brûlure +20%",
              "Dégâts par altération +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Balthazar"
      }
  },
  {
      "id": 24766,
      "name": "Rune de Dwayna mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/BC7E4DD2B7717AD7054CAFE103C7BEAC55C8142B\/222502.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Durée de Régénération +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Dwayna"
      }
  },
  {
      "id": 24767,
      "name": "Rune de Dwayna majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/18D12BA363989D7F223DD2A22E1DC87A6203D744\/221101.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Durée de Régénération +6%",
              "Guérison +30",
              "Durée de Régénération +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Dwayna"
      }
  },
  {
      "id": 24768,
      "name": "Rune de Dwayna supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/AFB370B09F230D76014E55662924CDFB5AD947A3\/220699.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée de Régénération +10%",
              "Guérison +50",
              "Durée de Régénération +20%",
              "Guérison +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Dwayna"
      }
  },
  {
      "id": 24769,
      "name": "Rune de Melandru mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/F51EE3CFB4C63ACB21232E2BC42C7C1AFCA4E075\/221102.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Melandru"
      }
  },
  {
      "id": 24770,
      "name": "Rune de Melandru majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/90E02AE6C40429F7E7BB5997D50E10DF63E37CDE\/221103.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Vitalité +21",
              "Robustesse +30",
              "Durée d'altération subie -6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Melandru"
      }
  },
  {
      "id": 24771,
      "name": "Rune de Melandru supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/66A56E6838D707BBBAD0B8D0091425502F7E3AF4\/220714.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Vitalité +35",
              "Robustesse +50",
              "Durée d'altération subie -10%",
              "Robustesse +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Melandru"
      }
  },
  {
      "id": 24774,
      "name": "Rune de Lyssa mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/0AFC0E5BAC23C905C8CB699B2AA9CCC20C12CE17\/221105.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +10",
              "Durée d'altération +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Lyssa"
      }
  },
  {
      "id": 24775,
      "name": "Rune de Lyssa majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/6D2AF76A2CEE6031FBE610B1BCB949B246D4FE4E\/221106.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +15",
              "Durée d'altération +3%",
              "Précision +30",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Lyssa"
      }
  },
  {
      "id": 24776,
      "name": "Rune de Lyssa supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0A5ED9EE533DC7116A7D50EAAECD5A1FF024ACFE\/220713.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Durée d'altération +5%",
              "Précision +50",
              "Durée d'avantage +10%",
              "Précision +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Lyssa"
      }
  },
  {
      "id": 24777,
      "name": "Rune de Grenth mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/72644F90F75A200B24717649960B12A427F820B8\/221107.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Givre +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Grenth"
      }
  },
  {
      "id": 24778,
      "name": "Rune de Grenth majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/D35BFBE536330093B0983F9345FADE6A4C240D24\/221108.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Givre +6%",
              "Dégâts par altération +30",
              "Durée de Givre +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Grenth"
      }
  },
  {
      "id": 24779,
      "name": "Rune de Grenth supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5930FE034AD9067EC7DF633C683927EB4A0F509F\/220706.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Givre +10%",
              "Dégâts par altération +50",
              "Durée de Givre +20%",
              "Dégâts par altération +100",
              "Durée de Givre +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Grenth"
      }
  },
  {
      "id": 24780,
      "name": "Rune de corsaire mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/1B9E351EC6B6C4422B41619A062667166DE6ACD7\/221109.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Pouvoir +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de corsaire"
      }
  },
  {
      "id": 24781,
      "name": "Rune de corsaire majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/3F0C3BD876779B6AEDC2A5DD0508A5794A5F4951\/221110.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Pouvoir +6%",
              "Puissance +30",
              "Durée de Pouvoir +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de corsaire"
      }
  },
  {
      "id": 24782,
      "name": "Rune de corsaire supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1C2095ADECD26F212D0F6C47BCCF5B7848B347CF\/220718.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de corsaire"
      }
  },
  {
      "id": 24783,
      "name": "Rune de golemancien mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/A2B901BDFC2C0A34AAECEEAC4CA6ECCDB73466B1\/221111.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +10",
              "Précision +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de golemancien"
      }
  },
  {
      "id": 24784,
      "name": "Rune de golemancien majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/01975DC1C81FB31E08EE04533C800E04330B74A8\/221112.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +15",
              "Précision +21",
              "Férocité +30",
              "Précision +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de golemancien"
      }
  },
  {
      "id": 24785,
      "name": "Rune de golemancien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/EB4F765E36EC9CF57526789A3EAB6702110D0949\/220705.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Précision +35",
              "Férocité +50",
              "Précision +65",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de golemancien"
      }
  },
  {
      "id": 24786,
      "name": "Rune du Centaure mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/BBB394450B1A613BA04449091FD0CF08C5B71DF3\/221113.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Rapidité +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Centaure"
      }
  },
  {
      "id": 24787,
      "name": "Rune du Centaure majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/D3B7305A3F7A63FDFAA306F4B1DEDDA3EB0ADEA8\/221114.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Rapidité +6%",
              "Puissance +30",
              "Durée de Rapidité +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Centaure"
      }
  },
  {
      "id": 24788,
      "name": "Rune du Centaure supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/37FB0225B2DE715BCB25B02D2914F35DBB080708\/220695.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Rapidité +10%",
              "Puissance +50",
              "Durée de Rapidité +20%",
              "Puissance +100",
              "Durée de Rapidité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Centaure"
      }
  },
  {
      "id": 24789,
      "name": "Rune de guivre mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/9B9C52779CE457967ADDA3B926423F4471486A05\/221115.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Férocité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guivre"
      }
  },
  {
      "id": 24790,
      "name": "Rune de guivre majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/DDE5AD3902753361664FC94013DBE493B2C65202\/221116.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Férocité +21",
              "Vitalité +30",
              "Férocité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guivre"
      }
  },
  {
      "id": 24791,
      "name": "Rune de guivre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D0076C2606409FD9AE49C562DD963B7B48B90136\/220725.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Férocité +35",
              "Vitalité +50",
              "Férocité +65",
              "Vitalité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guivre"
      }
  },
  {
      "id": 24792,
      "name": "Rune de Svanir mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/E7F20D7A2374A0F819041BC9590466A3F7343B03\/221117.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Durée de Givre +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Svanir"
      }
  },
  {
      "id": 24793,
      "name": "Rune de Svanir majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/34911F65259C75D6BD0624340D6AFFB39CA895A0\/221118.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Durée de Givre +6%",
              "Robustesse +30",
              "Durée de Givre +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Svanir"
      }
  },
  {
      "id": 24794,
      "name": "Rune de Svanir supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/65EA9C9AA55EF137657B65CA18EC98581B54DC0F\/220721.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Givre +10%",
              "Robustesse +50",
              "Durée de Givre +20%",
              "Robustesse +100",
              "Durée de Givre subi -66%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Svanir"
      }
  },
  {
      "id": 24795,
      "name": "Rune de la Légion de la Flamme mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/996BFF9344F72DD4269F324C056BB0E0FBD2E414\/221119.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Brûlure +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Légion de la Flamme"
      }
  },
  {
      "id": 24796,
      "name": "Rune de la Légion de la Flamme majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/60B7099FF1AE75359F6AE6AF9AA6EDC32511DA3C\/221120.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Brûlure +6%",
              "Puissance +30",
              "Durée de Brûlure +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Légion de la Flamme"
      }
  },
  {
      "id": 24797,
      "name": "Rune de la Légion de la Flamme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/776392A017E4DA16BF3DCA69292BB31ABA998010\/220703.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Brûlure +10%",
              "Puissance +50",
              "Durée de Brûlure +20%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Légion de la Flamme"
      }
  },
  {
      "id": 24798,
      "name": "Rune d'élémentaliste mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/7201CDC5A0FB519ECFC21C0CDBC63DED440C49A4\/221121.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Dégâts par altération +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'élémentaliste"
      }
  },
  {
      "id": 24799,
      "name": "Rune d'élémentaliste majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/50C8C1AC0926099273CEC60E9DF2FE7808FA3CF0\/221122.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Dégâts par altération +21",
              "Puissance +30",
              "Dégâts par altération +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'élémentaliste"
      }
  },
  {
      "id": 24800,
      "name": "Rune d'élémentaliste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F321ABCA3954145A4A17046D6170767740674866\/220730.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Dégâts par altération +35",
              "Puissance +50",
              "Dégâts par altération +65",
              "Puissance +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'élémentaliste"
      }
  },
  {
      "id": 24801,
      "name": "Rune d'envoûteur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/66BDF9379C39466D2B9F4152FC401143C9CB804D\/221123.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Précision +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'envoûteur"
      }
  },
  {
      "id": 24802,
      "name": "Rune d'envoûteur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/73F2B9B551BDD6E1F8309020725B640A25EF0B1A\/221124.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Précision +21",
              "Puissance +30",
              "Précision +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'envoûteur"
      }
  },
  {
      "id": 24803,
      "name": "Rune d'envoûteur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D4099559DA2558F9B172EFB306EE0C942193B66F\/220727.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Durée de Stupeur +33%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'envoûteur"
      }
  },
  {
      "id": 24804,
      "name": "Rune de nécromant mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/CC1C11004B6C0CD92B52B3315A57FB054D667E77\/221125.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de nécromant"
      }
  },
  {
      "id": 24805,
      "name": "Rune de nécromant majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/6D72ECD6A4E97F1CBE016155E02AEF71B1AD1A94\/221126.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Vitalité +21",
              "Dégâts par altération +30",
              "Vitalité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de nécromant"
      }
  },
  {
      "id": 24806,
      "name": "Rune de nécromant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/653A411208E7310CDCE628750C39A5C237F5F220\/220726.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Vitalité +35",
              "Dégâts par altération +50",
              "Vitalité +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de nécromant"
      }
  },
  {
      "id": 24810,
      "name": "Rune d'ingénieur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/95C56F914FD9AA056B1F58DA324E68F929B51C2B\/221127.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Dégâts par altération +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'ingénieur"
      }
  },
  {
      "id": 24811,
      "name": "Rune d'ingénieur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/9734150EF6DFF744C9DE55666758E0EFC76049C8\/221128.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Dégâts par altération +21",
              "Robustesse +30",
              "Dégâts par altération +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'ingénieur"
      }
  },
  {
      "id": 24812,
      "name": "Rune d'ingénieur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/9896142965DE036D05030D04220A036062545B43\/220728.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Dégâts par altération +35",
              "Robustesse +50",
              "Dégâts par altération +65",
              "Robustesse +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'ingénieur"
      }
  },
  {
      "id": 24813,
      "name": "Rune de rôdeur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/D6D8B0411F97625CF867D66BF22366CE44FEE41B\/221129.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +10",
              "Férocité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rôdeur"
      }
  },
  {
      "id": 24814,
      "name": "Rune de rôdeur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/3339317CA53FBA2BC79D37952542DDCE193305EB\/221130.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +15",
              "Férocité +21",
              "Précision +30",
              "Férocité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rôdeur"
      }
  },
  {
      "id": 24815,
      "name": "Rune de rôdeur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/74190770191950B5CD9439B93B487816959E9D3B\/220729.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Férocité +35",
              "Précision +50",
              "Férocité +65",
              "Précision +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rôdeur"
      }
  },
  {
      "id": 24816,
      "name": "Rune de voleur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/9EB91FAC0E5A76C33B0A8074E0E1270D9A175A24\/221131.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +10",
              "Dégâts par altération +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de voleur"
      }
  },
  {
      "id": 24817,
      "name": "Rune de voleur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/0156A90F23F469320891CB6EFB6E180A787008A2\/221132.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +15",
              "Dégâts par altération +21",
              "Précision +30",
              "Dégâts par altération +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de voleur"
      }
  },
  {
      "id": 24818,
      "name": "Rune de voleur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/997AEFF0927F640DE515B4DA516911B3B3B6B9EA\/220731.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Dégâts par altération +35",
              "Précision +50",
              "Dégâts par altération +65",
              "Précision +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de voleur"
      }
  },
  {
      "id": 24819,
      "name": "Rune de guerrier mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/C050E563435C45C95FACD8553ECDBE54297EA8B4\/221133.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Puissance +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guerrier"
      }
  },
  {
      "id": 24820,
      "name": "Rune de guerrier majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/ABE4A9CBDFBA43D09AC744AAA7646B0114B0FD20\/221134.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Puissance +21",
              "Vitalité +30",
              "Puissance +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guerrier"
      }
  },
  {
      "id": 24821,
      "name": "Rune de guerrier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/ACA8355625070B3706CAE0B49B0549CB12123420\/220732.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Puissance +35",
              "Vitalité +50",
              "Puissance +65",
              "Vitalité +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guerrier"
      }
  },
  {
      "id": 24822,
      "name": "Rune de gardien mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/0C42C10329C0466810D84601192270FA55F6EDF4\/221135.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Guérison +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de gardien"
      }
  },
  {
      "id": 24823,
      "name": "Rune de gardien majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/2852E61702DD700A3E67C3723A91133666134C1C\/221136.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Guérison +21",
              "Robustesse +30",
              "Guérison +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de gardien"
      }
  },
  {
      "id": 24824,
      "name": "Rune de gardien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/AE08720A7849BB97DA0E299C00440EFA5C6B1F98\/220733.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de gardien"
      }
  },
  {
      "id": 24825,
      "name": "Rune de fantassin mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/4AC62C07E3C1722F3EE192E118356AAC68D34551\/221137.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Robustesse +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de fantassin"
      }
  },
  {
      "id": 24826,
      "name": "Rune de fantassin majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/B200943606037445CB7302BFA2053A200C9F0BE0\/221138.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Robustesse +21",
              "Vitalité +30",
              "Robustesse +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de fantassin"
      }
  },
  {
      "id": 24827,
      "name": "Rune de fantassin supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/643A3C23647EF27F520860F0EFC7FEEB29766B1A\/220734.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Robustesse +35",
              "Vitalité +50",
              "Robustesse +65",
              "Vitalité +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de fantassin"
      }
  },
  {
      "id": 24828,
      "name": "Rune d'aventurier mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/9F12213103E017ACA475F10A3220C0D5DD58B50C\/221139.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Puissance +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aventure"
      }
  },
  {
      "id": 24829,
      "name": "Rune d'aventurier majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/290D37585A38BE8004E7C9407719C6FCF766ACE0\/221140.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Puissance +21",
              "Dégâts par altération +30",
              "Puissance +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aventure"
      }
  },
  {
      "id": 24830,
      "name": "Rune d'aventurier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3C053CD2680D7DAE5E0899E8F6FF530D0E445704\/221141.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Puissance +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aventure"
      }
  },
  {
      "id": 24831,
      "name": "Rune de bagarreur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/E45FAD920C2E2CFC6FB61463064AC403B732C919\/221142.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Robustesse +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de bagarreur"
      }
  },
  {
      "id": 24832,
      "name": "Rune de bagarreur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/C4DF5316F5B1F4045E42D560015F2206CB9FF93F\/221143.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Robustesse +21",
              "Puissance +30",
              "Robustesse +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de bagarreur"
      }
  },
  {
      "id": 24833,
      "name": "Rune de bagarreur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/65A51C02312B93452A6EA9F0BF6BB5240894500D\/220735.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de bagarreur"
      }
  },
  {
      "id": 24834,
      "name": "Rune d'érudit mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/62B3584D672417EB01DB4302E6767F04507B9390\/221144.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Férocité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'érudit"
      }
  },
  {
      "id": 24835,
      "name": "Rune d'érudit majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/D8F1977354D820E26E26A40660B945FE9ED3EA3B\/221145.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Férocité +21",
              "Puissance +30",
              "Férocité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'érudit"
      }
  },
  {
      "id": 24836,
      "name": "Rune d'érudit supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/4378ABC0415950DAC6A05C76920392D72E242EC2\/220736.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'érudit"
      }
  },
  {
      "id": 24837,
      "name": "Rune d'eau mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/41DFE8A9374CCC7A1E7C5E6B14535DB7B544F874\/221146.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'eau"
      }
  },
  {
      "id": 24838,
      "name": "Rune d'eau majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/BF001AE4ED5BD7335A49D64D2AD1090E1CA19E09\/221147.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Durée d'avantage +3%",
              "Guérison +30",
              "Supprime une altération lorsque vous êtes frappé. <c=@reminder>(Temps de recharge : 30 secondes)<\/c>"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'eau"
      }
  },
  {
      "id": 24839,
      "name": "Rune d'eau supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/50C5E3125234FF4525162A052335354D47B50D0F\/220737.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'eau"
      }
  },
  {
      "id": 24840,
      "name": "Rune de moine mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/AFBC93E29150DBB8CF3D050791FF0D0502354A0D\/221148.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de moine"
      }
  },
  {
      "id": 24841,
      "name": "Rune de moine majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/B1A2E63356C76E6A14F8CF2EA17E1E54CF37060F\/221149.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Durée d'avantage +3%",
              "Guérison +30",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de moine"
      }
  },
  {
      "id": 24842,
      "name": "Rune de moine supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/E028F4BC03E9EC36A368712463D824CEC30FCCDA\/220738.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de moine"
      }
  },
  {
      "id": 24843,
      "name": "Rune d'aristocratie mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/2DF7F00470797555D63DBD1B18E0B5D37BB60C55\/221150.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Pouvoir +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aristocratie"
      }
  },
  {
      "id": 24844,
      "name": "Rune d'aristocratie majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/6C2F0103FA432A4ACF12F4BF0342A62C63DC6221\/221151.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Pouvoir +6%",
              "Dégâts par altération +30",
              "Durée de Pouvoir +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aristocratie"
      }
  },
  {
      "id": 24845,
      "name": "Rune d'aristocratie supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D8375410EAF95DB5D29CAB063051AD2AA8FAD740\/221152.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Pouvoir +10%",
              "Dégâts par altération +50",
              "Durée de Pouvoir +20%",
              "Dégâts par altération +100",
              "Durée de Pouvoir +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aristocratie"
      }
  },
  {
      "id": 24846,
      "name": "Rune des Cauchemars mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/2358D3A8F6DDBE7BE07B260103F55570F33B28CE\/221153.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Peur +5%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Cauchemars"
      }
  },
  {
      "id": 24847,
      "name": "Rune des Cauchemars majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/9A773955089AD896BD369B40F52ED73D0FEFB4A4\/221154.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Peur +7%",
              "Dégâts par altération +30",
              "Durée d'altération +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Cauchemars"
      }
  },
  {
      "id": 24848,
      "name": "Rune des Cauchemars supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/2420347B95791503F2E666E948E825A652095395\/220739.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Peur +10%",
              "Dégâts par altération +50",
              "Durée d'altération +10%",
              "Dégâts par altération +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Cauchemars"
      }
  },
  {
      "id": 24849,
      "name": "Rune mineure de forgeron",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/D3906B07D5FB9B0A1007B6C3E4A109FC0B143943\/221155.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Durée de Brûlure +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de forgeron"
      }
  },
  {
      "id": 24850,
      "name": "Rune majeure de forgeron",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/98DD524B2FE81A21B83A62E6C80FBFEB149D0BFB\/221156.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Durée de Brûlure +6%",
              "Robustesse +30",
              "Durée de Brûlure +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de forgeron"
      }
  },
  {
      "id": 24851,
      "name": "Rune de forgeron supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0764987FBB1369A74103DE3F1B279C02EA503D02\/220740.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Brûlure +10%",
              "Robustesse +50",
              "Durée de Brûlure +20%",
              "Robustesse +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de forgeron"
      }
  },
  {
      "id": 24852,
      "name": "Rune de Feu-de-Bael mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/9E0AC6BED930F2F50F79ECD6CDBF1FF5E3B7AB39\/221157.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Brûlure +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Feu-de-Bael"
      }
  },
  {
      "id": 24853,
      "name": "Rune de Feu-de-Bael majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/4AA4DF15A04E6D3B5FDE7E7CEDDB7E15F44314FF\/221158.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Brûlure +6%",
              "Puissance +30",
              "Durée d'altération +5%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Feu-de-Bael"
      }
  },
  {
      "id": 24854,
      "name": "Rune de Feu-de-Bael supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/BE044D76F2F1762634B00A5E4216E7B8C104D1FB\/220741.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Brûlure +10%",
              "Puissance +50",
              "Durée d'altération +10%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Feu-de-Bael"
      }
  },
  {
      "id": 24855,
      "name": "Rune de sanctuaire mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/05E9F9B479D150E692EABB48EBD60999C2DEEC7A\/221159.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de sanctuaire"
      }
  },
  {
      "id": 24856,
      "name": "Rune de sanctuaire majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/1853F3C5FC0FB599B3F252537603040CC90A04B4\/221160.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Durée d'avantage +3%",
              "Vitalité +30",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de sanctuaire"
      }
  },
  {
      "id": 24857,
      "name": "Rune de sanctuaire supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/7C142C0B6558D2DCDB01E580A04321302F4F5B40\/220742.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée d'avantage +5%",
              "Vitalité +50",
              "Durée d'avantage +10%",
              "Vitalité +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de sanctuaire"
      }
  },
  {
      "id": 24858,
      "name": "Rune d'Orr mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/7AB17CADDC7DEDE890372F945D7B243A223C2DB9\/221161.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée d'altération subie -2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Orr"
      }
  },
  {
      "id": 24859,
      "name": "Rune d'Orr majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/286D197E55CF9110E910DF02922610C31F4A5B22\/221162.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée d'altération subie -3%",
              "Dégâts par altération +30",
              "Durée d'altération subie -6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Orr"
      }
  },
  {
      "id": 24860,
      "name": "Rune d'Orr supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/27245474E83839DC6648F22CF6B5F4B09514DF11\/220743.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération subie -5%",
              "Dégâts par altération +50",
              "Durée d'altération subie -10%",
              "Dégâts par altération +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Orr"
      }
  },
  {
      "id": 36042,
      "name": "Rune du Roi Dément mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/0BD956A7BD1EB67433C8637D1B1F1222FA4E2A2F\/499377.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée d'altération +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Roi Dément"
      }
  },
  {
      "id": 36043,
      "name": "Rune du Roi Dément majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/C3920894BC0EF476D761B027B1F8A1721AE0B49E\/499378.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée d'altération +3%",
              "Puissance +30",
              "Durée de Saignement +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Roi Dément"
      }
  },
  {
      "id": 36044,
      "name": "Rune du Roi Dément supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0A0E6F80DA16D7764FFEA33893B66051FBE07A3F\/499379.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'altération +5%",
              "Puissance +50",
              "Durée de Saignement +20%",
              "Puissance +100",
              "Durée de Saignement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Roi Dément"
      }
  },
  {
      "id": 38204,
      "name": "Rune d'altruisme mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/311A36D9165FFBDDE3A123EC937F450A3D1C2C99\/526276.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'altruisme"
      }
  },
  {
      "id": 38205,
      "name": "Rune d'altruisme majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/F9C1923B2DE1309830DE0B0302F35A9D7BC8D099\/526277.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Durée d'avantage +3%",
              "Guérison +30",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'altruisme"
      }
  },
  {
      "id": 38206,
      "name": "Rune d'altruisme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/054CCE66F235B4DCAF1213389203BFFDE43004E7\/526278.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'altruisme"
      }
  },
  {
      "id": 44951,
      "name": "Rune d'exubérance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5FBA08E65429F5AF91CE4776F6AC4972FCF93E50\/619710.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Guérison +35",
              "Vitalité +50",
              "Précision +65",
              "Vitalité +100",
              "Puissance +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'exubérance"
      }
  },
  {
      "id": 44952,
      "name": "Rune d'exubérance majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/D69FBE744029E8227DF4E8E4386D1EE9130ADF2A\/619711.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Guérison +21",
              "Vitalité +30",
              "Précision +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'exubérance"
      }
  },
  {
      "id": 44953,
      "name": "Rune d'exubérance mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/C3E82DAE35CCCE9CAAB9DEA2B047E0290F0EC778\/619712.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Guérison +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'exubérance"
      }
  },
  {
      "id": 44954,
      "name": "Rune du tourment mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/130C622C3AAF42F30312DD6CBB2F39A5574FA411\/619713.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Tourment +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du tourment"
      }
  },
  {
      "id": 44955,
      "name": "Rune du tourment majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/B02ED24F950F615DD79DC9056D5C2C78A6B95A57\/619714.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Tourment +6%",
              "Dégâts par altération +30",
              "Durée de Tourment +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du tourment"
      }
  },
  {
      "id": 44956,
      "name": "Rune du tourment supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F8BC046221EA49EB3D349B5D3C50DDF33213D8B3\/619715.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Tourment +10%",
              "Dégâts par altération +50",
              "Durée de Tourment +20%",
              "Dégâts par altération +100",
              "Durée de Tourment +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du tourment"
      }
  },
  {
      "id": 44957,
      "name": "Rune de perplexité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F67A922A4624470EBAD493920DC1EE2616769E9D\/619716.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Confusion +10%",
              "Dégâts par altération +50",
              "Durée de Confusion +20%",
              "Dégâts par altération +100",
              "Durée de Confusion +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de perplexité"
      }
  },
  {
      "id": 44958,
      "name": "Rune de perplexité majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/C9EE974805056E33E274A7300BB8A65CC66EECE0\/619717.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée de Confusion +6%",
              "Dégâts par altération +30",
              "Durée de Confusion +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de perplexité"
      }
  },
  {
      "id": 44959,
      "name": "Rune de perplexité mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/13E6EFBC38DF95C6F62D0BBB55B8BC63C29BA806\/619718.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée de Confusion +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de perplexité"
      }
  },
  {
      "id": 47908,
      "name": "Rune du Sans-soleil supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/01C3E7BA21ACB2220DEF2713DCA6F5C745CD9106\/638381.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération subie -5%",
              "Dégâts par altération +50",
              "Durée d'altération subie -10%",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Sans-soleil"
      }
  },
  {
      "id": 48907,
      "name": "Rune d'antitoxine supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0747F00D03B499F1CEE2075F9FFE9F4998C6D2B6\/665777.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération subie -5%",
              "Dégâts par altération +50",
              "Durée d'altération subie -10%",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'antitoxine"
      }
  },
  {
      "id": 67912,
      "name": "Rune du Défenseur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0371967D72777E35C2E11E540E462DB2D82BA102\/2028758.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Défenseur"
      }
  },
  {
      "id": 68435,
      "name": "Rune des neiges majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/00C512585AE7630505B926E3EBD8D0BAD93D071C\/924724.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Guérison +21",
              "Robustesse +30",
              "Guérison +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des neiges"
      }
  },
  {
      "id": 68437,
      "name": "Rune des neiges supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/177542577DA8A9500706A80D1F79BB7FD5EA9DD5\/924726.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des neiges"
      }
  },
  {
      "id": 68438,
      "name": "Rune des neiges mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/32AF4174DAB764C231E3C4AA6056CA585F79D998\/924727.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Guérison +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des neiges"
      }
  },
  {
      "id": 24685,
      "name": "Rune des Affligés mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/210FF7F029E12330094E209AD9F170DBEF7AC833\/221046.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +10",
              "Durée d'Empoisonnement +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Affligés"
      }
  },
  {
      "id": 24686,
      "name": "Rune des Affligés majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/B60F2022B79792C5AE920E124D5C3D26F05AC294\/221047.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +15",
              "Durée d'Empoisonnement +6%",
              "Dégâts par altération +30",
              "Durée de Saignement +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Affligés"
      }
  },
  {
      "id": 24687,
      "name": "Rune des Affligés supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/B952E2BB3ACDF477F4C823655DAC1294C9A12745\/220692.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'Empoisonnement +10%",
              "Dégâts par altération +50",
              "Durée de Saignement +20%",
              "Dégâts par altération +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Affligés"
      }
  },
  {
      "id": 24688,
      "name": "Rune de la liche supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/10324E350DEFA2276F0FD22299D4BAFD00736D18\/220712.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée d'altération +5%",
              "Vitalité +50",
              "Durée d'altération +10%",
              "Vitalité +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la liche"
      }
  },
  {
      "id": 24689,
      "name": "Rune de la liche mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/37E30F90D477DAD66E687F075E9803B23206024C\/221048.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Durée d'altération +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la liche"
      }
  },
  {
      "id": 24690,
      "name": "Rune de la liche majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/5B4F73989C077C6426350606296E46391EC708A0\/221049.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Durée d'altération +3%",
              "Vitalité +30",
              "Durée d'altération +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la liche"
      }
  },
  {
      "id": 24691,
      "name": "Rune du voyageur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CCCAB48D5D5FAEA14912BC6D3DB1A79DFC4C846\/221050.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'avantage +5%",
              "Toutes les statistiques +12",
              "Durée d'avantage +10%",
              "Toutes les statistiques +16",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du voyageur"
      }
  },
  {
      "id": 24692,
      "name": "Rune du voyageur majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/0E4724F511EC68679D935270172FBA557ABCC2FB\/221051.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +5",
              "Durée d'avantage +3%",
              "Toutes les statistiques +7",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du voyageur"
      }
  },
  {
      "id": 24693,
      "name": "Rune du voyageur mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/94181173FF0DC80CF7F606FEC32E3A741D42646B\/221052.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +4",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du voyageur"
      }
  },
  {
      "id": 24694,
      "name": "Rune des ouailles mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/2838951E64CAF578D2426D7AED6ECEBD05390D61\/221053.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des ouailles"
      }
  },
  {
      "id": 24695,
      "name": "Rune des ouailles majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/2BA523C17A3BE0D6D2EC773361746A6FE3282E23\/222500.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +15",
              "Vitalité +21",
              "Guérison +30",
              "Vitalité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des ouailles"
      }
  },
  {
      "id": 24696,
      "name": "Rune des ouailles supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F9D5AFF9E79806AF490FA1E6DD73041D15D401A7\/220704.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Vitalité +35",
              "Guérison +50",
              "Vitalité +65",
              "Guérison +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des ouailles"
      }
  },
  {
      "id": 24697,
      "name": "Rune du dolyak mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/B9E7783564FAF32E70265839E899FE2C190E291C\/221055.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du dolyak"
      }
  },
  {
      "id": 24698,
      "name": "Rune du dolyak majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/1447959B65EB2BB34F0C9BBD02BB1A4FE1009F1B\/221056.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Vitalité +21",
              "Robustesse +30",
              "Vitalité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du dolyak"
      }
  },
  {
      "id": 24699,
      "name": "Rune du dolyak supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/217571E95C4742460B033E0F5F2B3FB611C9DC4A\/220698.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Vitalité +35",
              "Robustesse +50",
              "Vitalité +65",
              "Robustesse +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du dolyak"
      }
  },
  {
      "id": 24700,
      "name": "Rune de la meute mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/051994CAE324079D0E0806D49358406B60074A77\/221057.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée d'avantage +2%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la meute"
      }
  },
  {
      "id": 24701,
      "name": "Rune de la meute majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/3F6CE23F992D2A5B4E12794B094CFA4477FAC067\/221058.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée d'avantage +3%",
              "Puissance +30",
              "Durée d'avantage +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la meute"
      }
  },
  {
      "id": 24702,
      "name": "Rune de la meute supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/FEF77764F24C0548271F29337268970C092DA5D3\/220717.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la meute"
      }
  },
  {
      "id": 24703,
      "name": "Rune d'infiltration supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F9C62BCFB70106EEBCA33C4AC35352CE2A082F10\/220710.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'infiltration"
      }
  },
  {
      "id": 24704,
      "name": "Rune d'infiltration majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/BE69A100DAD57E993253BE2CCA189377A5E33D72\/221059.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Précision +21",
              "Puissance +30",
              "Précision +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'infiltration"
      }
  },
  {
      "id": 24705,
      "name": "Rune d'infiltration mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/77A09446A8DF044329F70D499F524BD22B01E3A7\/221060.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Précision +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'infiltration"
      }
  },
  {
      "id": 24706,
      "name": "Rune de pitié mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/F80602571ED37E12EF0521F0FC947AB0D39CF70F\/221061.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +10",
              "Guérison +15"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de pitié"
      }
  },
  {
      "id": 24707,
      "name": "Rune de pitié majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/769D6A2A4DDD1D666FB3012CE2560963015F9693\/221062.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +15",
              "Guérison +21",
              "Robustesse +30",
              "Guérison +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de pitié"
      }
  },
  {
      "id": 24708,
      "name": "Rune de pitié supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6866D3A85960F806E67C616E5709F97F0D025F02\/220715.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de pitié"
      }
  },
  {
      "id": 24709,
      "name": "Rune de vampirisme mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/A031C737D7A808F7037390FBF3F0F16364F244C9\/221063.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Vitalité +14"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vampirisme"
      }
  },
  {
      "id": 24710,
      "name": "Rune de vampirisme majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/18353AB79ED03D0D473D0E9D2B21B32533D6577E\/221064.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Vitalité +21",
              "Puissance +30",
              "Vitalité +39"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vampirisme"
      }
  },
  {
      "id": 24711,
      "name": "Rune de vampirisme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F13EECC6AED473604A097A5DBB0861E3410702EF\/220724.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Vitalité +35",
              "Puissance +50",
              "Vitalité +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vampirisme"
      }
  },
  {
      "id": 24712,
      "name": "Rune de force mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/C834A95BDF012475585CE51F80B0E155613E9D02\/221065.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +10",
              "Durée de Pouvoir +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de force"
      }
  },
  {
      "id": 24713,
      "name": "Rune de force majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/0E566697440608D7FA4096FD0F06DDAFF2A9B290\/221066.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +15",
              "Durée de Pouvoir +6%",
              "Puissance +30",
              "Durée de Pouvoir +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de force"
      }
  },
  {
      "id": 24714,
      "name": "Rune de force supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F33F44776DFCB0D75B48005904E3C75456C4F5FA\/220644.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Durée de Pouvoir +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de force"
      }
  },
  {
      "id": 24715,
      "name": "Rune de rage mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/096EAFD3D4D87EA17F0937B85001E44D20BD2216\/221067.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +10",
              "Durée de Fureur +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rage"
      }
  },
  {
      "id": 24716,
      "name": "Rune de rage majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/0CC327D309376221353C1199E80C0D145723F26F\/221068.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +15",
              "Durée de Fureur +6%",
              "Férocité +30",
              "Durée de Fureur +6%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rage"
      }
  },
  {
      "id": 24717,
      "name": "Rune de rage supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5F65FDA9D721B6BA5654E5ED29A42B01C04DF2DA\/220719.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Fureur +10%",
              "Férocité +50",
              "Durée de Fureur +20%",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rage"
      }
  },
  {
      "id": 24718,
      "name": "Rune de vitesse mineure",
      "type": "UpgradeComponent",
      "rarity": "Masterwork",
      "icon": "https:\/\/render.guildwars2.com\/file\/AB0A0526902F293AB835BB0BB9EC9345742AC1F2\/221069.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +10",
              "Durée de Rapidité +4%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vitesse"
      }
  },
  {
      "id": 24719,
      "name": "Rune de vitesse majeure",
      "type": "UpgradeComponent",
      "rarity": "Rare",
      "icon": "https:\/\/render.guildwars2.com\/file\/6946BB0F1FB8A1EA3D582CE4A043A85F93B36718\/221070.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +15",
              "Durée de Rapidité +6%",
              "Vitalité +30",
              "Durée de Rapidité +9%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vitesse"
      }
  },
  {
      "id": 24720,
      "name": "Rune de vitesse supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/1ED9421DC70174CA9BBC33075047381C3659C837\/220722.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée de Rapidité +10%",
              "Vitalité +50",
              "Durée de Rapidité +20%",
              "Vitalité +100",
              "Durée de Rapidité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vitesse"
      }
  },
  {
      "id": 49460,
      "name": "Rune de résistance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/585BF273BFCD9D12F462087A19FBD12DF755269A\/681057.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'altération subie -5%",
              "Robustesse +50",
              "Durée d'altération subie -10%",
              "Robustesse +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de résistance"
      }
  },
  {
      "id": 67339,
      "name": "Rune du trappeur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/4A322301EDD61898193B9B94A0A6A1F1DC06BF24\/866844.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération +5%",
              "Dégâts par altération +50",
              "Durée d'altération +10%",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du trappeur"
      }
  },
  {
      "id": 67342,
      "name": "Rune de rayonnement supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/BAB7FAD330A0EC183426D646C2440BCB7F74324D\/866847.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée d'avantage +5%",
              "Vitalité +50",
              "Durée d'avantage +10%",
              "Vitalité +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rayonnement"
      }
  },
  {
      "id": 67344,
      "name": "Rune de dérobade supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/32C4042A0F1D53041C4190760B7BCA1FDADA90E1\/866849.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Rapidité +10%",
              "Férocité +50",
              "Durée de Rapidité +20%",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de dérobade"
      }
  },
  {
      "id": 69370,
      "name": "Rune de revenant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3C07D12B7B55004FA51C5D4DC20794329BE023B5\/1201526.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de revenant"
      }
  },
  {
      "id": 70450,
      "name": "Rune du druide supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0FBCEEC6A67AE360C81EE314801948A5FA31E2D5\/1201521.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Vitalité +35",
              "Guérison +50",
              "Vitalité +65",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du druide"
      }
  },
  {
      "id": 70600,
      "name": "Rune de charisme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0CD614069C9917057D1BEC5B060E689E18E8EE51\/1201517.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'avantage +5%",
              "Toutes les statistiques +12",
              "Durée d'avantage +10%",
              "Toutes les statistiques +16",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de charisme"
      }
  },
  {
      "id": 70829,
      "name": "Rune du faucheur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/4A990939E313EC37284DF1B1435435A7CE036930\/1201525.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du faucheur"
      }
  },
  {
      "id": 71276,
      "name": "Rune du mécatronicien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/07FB016965EC6423035D3FEA02CF241D453203EA\/1201527.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du mécatronicien"
      }
  },
  {
      "id": 71425,
      "name": "Rune du berserker supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/EB082298F2B83D4E042EF9C1566F3D4E250EB204\/1201518.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du berserker"
      }
  },
  {
      "id": 72852,
      "name": "Rune du fracasseur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5957E29A2B985F0FF0E50878F62A702262BC0714\/1201520.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du fracasseur"
      }
  },
  {
      "id": 72912,
      "name": "Rune d'épines supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/32DA0B5704E8DEC0F36B6C460734C496C603541C\/1201523.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'Empoisonnement +10%",
              "Dégâts par altération +50",
              "Durée d'Empoisonnement +20%",
              "Dégâts par altération +100",
              "Durée d'Empoisonnement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'épines"
      }
  },
  {
      "id": 73399,
      "name": "Rune du chronomancien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/80FE6B56334AB53830DD2D0F61992DF4CC44A710\/1201519.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du chronomancien"
      }
  },
  {
      "id": 73653,
      "name": "Rune de durabilité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/585BF273BFCD9D12F462087A19FBD12DF755269A\/681057.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'avantage +5%",
              "Robustesse +50",
              "Durée d'avantage +10%",
              "Robustesse +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de durabilité"
      }
  },
  {
      "id": 74978,
      "name": "Rune du draconnier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/E698E699D9A75AC90CA47A3FBA0259216C29041D\/1201528.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Puissance +35",
              "Férocité +50",
              "Puissance +65",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du draconnier"
      }
  },
  {
      "id": 76100,
      "name": "Rune du héraut supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/041C98AABD6751C5FAF8AD74F3253CACF0E8DA74\/1201522.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'avantage +5%",
              "Robustesse +50",
              "Durée d'avantage +10%",
              "Robustesse +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du héraut"
      }
  },
  {
      "id": 76166,
      "name": "Rune du cataclyste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/D144F10ABB48042794BA0627EE04B3311A4131DB\/1201529.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'altération +5%",
              "Toutes les statistiques +12",
              "Durée d'altération +10%",
              "Toutes les statistiques +16",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du cataclyste"
      }
  },
  {
      "id": 76813,
      "name": "Rune de montée en puissance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5C75473F560F80E6A6444147EA5C66F959C46E59\/1201524.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de montée en puissance"
      }
  },
  {
      "id": 81091,
      "name": "Rune de bonté de la nature supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/A891700CDC179D6CC4B2FDC82F4052AC19F41801\/1676536.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'altération subie -5%",
              "Guérison +50",
              "Durée d'altération subie -10%",
              "Guérison +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de bonté de la nature"
      }
  },
  {
      "id": 82633,
      "name": "Rune de l'Holographiste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3AFE1A1A79FCC768DE5A611BFC2A4D0101CBE79A\/1766388.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Vitalité +35",
              "Puissance +50",
              "Vitalité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Holographiste"
      }
  },
  {
      "id": 82791,
      "name": "Rune du Sniper supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/17E6C846E62E51AFF8B8AF5A33FD53B391BD7E75\/1766386.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Sniper"
      }
  },
  {
      "id": 83338,
      "name": "Rune de l'Incendiaire supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5BB9C1FF1BFF6A52217F4007C2B1FFCAB9BCC6B3\/1766387.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Célérité +10%",
              "Dégâts par altération +50",
              "Durée d'avantage +10%",
              "Dégâts par altération +100",
              "Durée de Célérité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Incendiaire"
      }
  },
  {
      "id": 83367,
      "name": "Rune de Cavalier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C3B4033342280901BB155A7B124ED208DBB83923\/1766384.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Cavalier"
      }
  },
  {
      "id": 83423,
      "name": "Rune du Tissesort supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C0D36E7D6CAAA060F2EFB0E1CAA2587002F3F451\/1766394.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée de Brûlure +10%",
              "Toutes les statistiques +12",
              "Durée de Givre +20%",
              "Toutes les statistiques +16",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Tissesort"
      }
  },
  {
      "id": 83502,
      "name": "Rune du Renégat supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6701DC14A246E241E006A54D04206F01997ED8B9\/1766391.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Férocité +35",
              "Dégâts par altération +50",
              "Férocité +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Renégat"
      }
  },
  {
      "id": 83663,
      "name": "Rune du Fléau supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/53707264D8BA7E692C63769F68DC03B722223CD5\/1766392.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Dégâts par altération +35",
              "Guérison +50",
              "Dégâts par altération +65",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Fléau"
      }
  },
  {
      "id": 83964,
      "name": "Rune de l'Animorphe supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5CCA6A235D02FCA92B5DC90EC82EECD8BE694222\/1766385.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Animorphe"
      }
  },
  {
      "id": 84127,
      "name": "Rune du Mirage supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F59199027BDD14A0F4EB4DE8015CAC7F49E7CCE0\/1766389.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Robustesse +35",
              "Dégâts par altération +50",
              "Robustesse +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Mirage"
      }
  },
  {
      "id": 84171,
      "name": "Rune de Renaissance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/DA4AF714D87F63978039E053D80F9F717A49D3BE\/1766390.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Renaissance"
      }
  },
  {
      "id": 84749,
      "name": "Rune du Brisesort supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0F04D648CC2501FDC6B5E9929F76AD7D16D4AF0F\/1766393.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Brisesort"
      }
  },
  {
      "id": 85527,
      "name": "Rune du Brisesort",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/0F04D648CC2501FDC6B5E9929F76AD7D16D4AF0F\/1766393.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Brisesort"
      }
  },
  {
      "id": 85559,
      "name": "Rune du Renégat",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/6701DC14A246E241E006A54D04206F01997ED8B9\/1766391.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Férocité +35",
              "Dégâts par altération +50",
              "Férocité +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Renégat"
      }
  },
  {
      "id": 85573,
      "name": "Rune du Sniper",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/17E6C846E62E51AFF8B8AF5A33FD53B391BD7E75\/1766386.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Sniper"
      }
  },
  {
      "id": 85578,
      "name": "Rune de l'Incendiaire",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5BB9C1FF1BFF6A52217F4007C2B1FFCAB9BCC6B3\/1766387.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Célérité +4%",
              "Dégâts par altération +50",
              "Durée d'avantage +3%",
              "Dégâts par altération +100",
              "Durée de Célérité +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Incendiaire"
      }
  },
  {
      "id": 85588,
      "name": "Rune du Tissesort",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/C0D36E7D6CAAA060F2EFB0E1CAA2587002F3F451\/1766394.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée de Brûlure +4%",
              "Toutes les statistiques +12",
              "Durée de Givre +6%",
              "Toutes les statistiques +16",
              "Durée d'altération +5%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Tissesort"
      }
  },
  {
      "id": 85602,
      "name": "Rune du Mirage",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/F59199027BDD14A0F4EB4DE8015CAC7F49E7CCE0\/1766389.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Robustesse +35",
              "Dégâts par altération +50",
              "Robustesse +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Mirage"
      }
  },
  {
      "id": 85606,
      "name": "Rune de l'Animorphe",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/5CCA6A235D02FCA92B5DC90EC82EECD8BE694222\/1766385.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Animorphe"
      }
  },
  {
      "id": 85617,
      "name": "Rune de l'Holographiste",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/3AFE1A1A79FCC768DE5A611BFC2A4D0101CBE79A\/1766388.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Vitalité +35",
              "Puissance +50",
              "Vitalité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Holographiste"
      }
  },
  {
      "id": 85713,
      "name": "Rune des étoiles supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/BEDDD1D249DF6FC417451E0CA25F803FA818294A\/1894695.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée de Faiblesse subie -30%",
              "Toutes les statistiques +12",
              "Durée de Givre et des Infirmités subis -30%",
              "Toutes les statistiques +16",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des étoiles"
      }
  },
  {
      "id": 88118,
      "name": "Rune supérieure des Zéphyrites",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/28E50D0A627FFBC7E7112822B8C45C032E39636D\/2015082.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Zéphyrites"
      }
  },
  {
      "id": 89999,
      "name": "Rune de feux d'artifice supérieure",
      "type": "UpgradeComponent",
      "rarity": "Exotic",
      "icon": "https:\/\/render.guildwars2.com\/file\/CECC01C8220163A9646171B0BAA528B73DE3D527\/2100803.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": ""
      }
  },
  {
      "id": 91381,
      "name": "Rune d'épines supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'Empoisonnement +10%",
              "Dégâts par altération +50",
              "Durée d'Empoisonnement +20%",
              "Dégâts par altération +100",
              "Durée d'Empoisonnement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'épines"
      }
  },
  {
      "id": 91387,
      "name": "Rune d'envoûteur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Durée de Stupeur +33%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'envoûteur"
      }
  },
  {
      "id": 91391,
      "name": "Rune de golemancien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Précision +35",
              "Férocité +50",
              "Précision +65",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de golemancien"
      }
  },
  {
      "id": 91392,
      "name": "Rune de dérobade supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Rapidité +10%",
              "Férocité +50",
              "Durée de Rapidité +20%",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de dérobade"
      }
  },
  {
      "id": 91396,
      "name": "Rune de Cavalier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Cavalier"
      }
  },
  {
      "id": 91397,
      "name": "Rune du berserker supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du berserker"
      }
  },
  {
      "id": 91399,
      "name": "Rune d'Orr supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération subie -5%",
              "Dégâts par altération +50",
              "Durée d'altération subie -10%",
              "Dégâts par altération +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Orr"
      }
  },
  {
      "id": 91401,
      "name": "Rune de vitesse supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée de Rapidité +10%",
              "Vitalité +50",
              "Durée de Rapidité +20%",
              "Vitalité +100",
              "Durée de Rapidité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vitesse"
      }
  },
  {
      "id": 91404,
      "name": "Rune du Défenseur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Défenseur"
      }
  },
  {
      "id": 91408,
      "name": "Rune des ouailles supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Vitalité +35",
              "Guérison +50",
              "Vitalité +65",
              "Guérison +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des ouailles"
      }
  },
  {
      "id": 91410,
      "name": "Rune des Cauchemars supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Peur +10%",
              "Dégâts par altération +50",
              "Durée d'altération +10%",
              "Dégâts par altération +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Cauchemars"
      }
  },
  {
      "id": 91411,
      "name": "Rune de résistance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'altération subie -5%",
              "Robustesse +50",
              "Durée d'altération subie -10%",
              "Robustesse +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de résistance"
      }
  },
  {
      "id": 91417,
      "name": "Rune d'exubérance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Guérison +35",
              "Vitalité +50",
              "Précision +65",
              "Vitalité +100",
              "Puissance +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'exubérance"
      }
  },
  {
      "id": 91419,
      "name": "Rune de forgeron supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Brûlure +10%",
              "Robustesse +50",
              "Durée de Brûlure +20%",
              "Robustesse +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de forgeron"
      }
  },
  {
      "id": 91423,
      "name": "Rune de force supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Durée de Pouvoir +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de force"
      }
  },
  {
      "id": 91425,
      "name": "Rune de bagarreur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de bagarreur"
      }
  },
  {
      "id": 91428,
      "name": "Rune de divinité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Toutes les statistiques +18"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de divinité"
      }
  },
  {
      "id": 91430,
      "name": "Rune du druide supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Vitalité +35",
              "Guérison +50",
              "Vitalité +65",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du druide"
      }
  },
  {
      "id": 91432,
      "name": "Rune du draconnier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Puissance +35",
              "Férocité +50",
              "Puissance +65",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du draconnier"
      }
  },
  {
      "id": 91433,
      "name": "Rune de l'aigle supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Férocité +35",
              "Précision +50",
              "Férocité +65",
              "Précision +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'aigle"
      }
  },
  {
      "id": 91435,
      "name": "Rune de Krait supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Saignement +10%",
              "Dégâts par altération +50",
              "Durée de Saignement +20%",
              "Dégâts par altération +100",
              "Durée de Saignement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Krait"
      }
  },
  {
      "id": 91444,
      "name": "Rune de durabilité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'avantage +5%",
              "Robustesse +50",
              "Durée d'avantage +10%",
              "Robustesse +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de durabilité"
      }
  },
  {
      "id": 91445,
      "name": "Rune de mort-vivant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Robustesse +35",
              "Dégâts par altération +50",
              "Robustesse +65",
              "Dégâts par altération +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de mort-vivant"
      }
  },
  {
      "id": 91447,
      "name": "Rune de revenant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de revenant"
      }
  },
  {
      "id": 91451,
      "name": "Rune du Tissesort supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée de Brûlure +10%",
              "Toutes les statistiques +12",
              "Durée de Givre +20%",
              "Toutes les statistiques +16",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Tissesort"
      }
  },
  {
      "id": 91457,
      "name": "Rune du fracasseur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du fracasseur"
      }
  },
  {
      "id": 91459,
      "name": "Rune du dolyak supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Vitalité +35",
              "Robustesse +50",
              "Vitalité +65",
              "Robustesse +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du dolyak"
      }
  },
  {
      "id": 91460,
      "name": "Rune des Affligés supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'Empoisonnement +10%",
              "Dégâts par altération +50",
              "Durée de Saignement +20%",
              "Dégâts par altération +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Affligés"
      }
  },
  {
      "id": 91464,
      "name": "Rune du Fléau supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Dégâts par altération +35",
              "Guérison +50",
              "Dégâts par altération +65",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Fléau"
      }
  },
  {
      "id": 91465,
      "name": "Rune d'élémentaliste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Dégâts par altération +35",
              "Puissance +50",
              "Dégâts par altération +65",
              "Puissance +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'élémentaliste"
      }
  },
  {
      "id": 91468,
      "name": "Rune de Grenth supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Givre +10%",
              "Dégâts par altération +50",
              "Durée de Givre +20%",
              "Dégâts par altération +100",
              "Durée de Givre +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Grenth"
      }
  },
  {
      "id": 91471,
      "name": "Rune de Lyssa supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Durée d'altération +5%",
              "Précision +50",
              "Durée d'avantage +10%",
              "Précision +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Lyssa"
      }
  },
  {
      "id": 91475,
      "name": "Rune du Bosquet supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée de Protection +10%",
              "Guérison +50",
              "Durée de Protection +20%",
              "Guérison +100",
              "Durée de Protection +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Bosquet"
      }
  },
  {
      "id": 91477,
      "name": "Rune de Feu-de-Bael supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Brûlure +10%",
              "Puissance +50",
              "Durée d'altération +10%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Feu-de-Bael"
      }
  },
  {
      "id": 91482,
      "name": "Rune de feux d'artifice supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": ""
      }
  },
  {
      "id": 91483,
      "name": "Rune du Sniper supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Sniper"
      }
  },
  {
      "id": 91485,
      "name": "Rune du voyageur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'avantage +5%",
              "Toutes les statistiques +12",
              "Durée d'avantage +10%",
              "Toutes les statistiques +16",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du voyageur"
      }
  },
  {
      "id": 91489,
      "name": "Rune de feu supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de feu"
      }
  },
  {
      "id": 91493,
      "name": "Rune de terre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Protection +10%",
              "Robustesse +50",
              "Durée de Protection +20%",
              "Robustesse +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de terre"
      }
  },
  {
      "id": 91494,
      "name": "Rune de Svanir supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée de Givre +10%",
              "Robustesse +50",
              "Durée de Givre +20%",
              "Robustesse +100",
              "Durée de Givre subi -66%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Svanir"
      }
  },
  {
      "id": 91497,
      "name": "Rune d'Ogre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Férocité +35",
              "Puissance +50",
              "Férocité +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Ogre"
      }
  },
  {
      "id": 91501,
      "name": "Rune de moine supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de moine"
      }
  },
  {
      "id": 91503,
      "name": "Rune de rage supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Fureur +10%",
              "Férocité +50",
              "Durée de Fureur +20%",
              "Férocité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rage"
      }
  },
  {
      "id": 91507,
      "name": "Rune de la Légion de la Flamme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Brûlure +10%",
              "Puissance +50",
              "Durée de Brûlure +20%",
              "Puissance +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Légion de la Flamme"
      }
  },
  {
      "id": 91508,
      "name": "Rune du trappeur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération +5%",
              "Dégâts par altération +50",
              "Durée d'altération +10%",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du trappeur"
      }
  },
  {
      "id": 91510,
      "name": "Rune de l'Animorphe supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Animorphe"
      }
  },
  {
      "id": 91512,
      "name": "Rune des neiges supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des neiges"
      }
  },
  {
      "id": 91513,
      "name": "Rune de Balthazar supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Brûlure +10%",
              "Dégâts par altération +50",
              "Durée de Brûlure +20%",
              "Dégâts par altération +100",
              "Durée de Brûlure +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Balthazar"
      }
  },
  {
      "id": 91515,
      "name": "Rune du Sans-soleil supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée d'altération subie -5%",
              "Dégâts par altération +50",
              "Durée d'altération subie -10%",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Sans-soleil"
      }
  },
  {
      "id": 91516,
      "name": "Rune du tourment supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Tourment +10%",
              "Dégâts par altération +50",
              "Durée de Tourment +20%",
              "Dégâts par altération +100",
              "Durée de Tourment +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du tourment"
      }
  },
  {
      "id": 91518,
      "name": "Rune d'eau supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée d'avantage +5%",
              "Guérison +50",
              "Durée d'avantage +10%",
              "Guérison +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'eau"
      }
  },
  {
      "id": 91522,
      "name": "Rune d'ingénieur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Dégâts par altération +35",
              "Robustesse +50",
              "Dégâts par altération +65",
              "Robustesse +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'ingénieur"
      }
  },
  {
      "id": 91523,
      "name": "Rune de guerrier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Puissance +35",
              "Vitalité +50",
              "Puissance +65",
              "Vitalité +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guerrier"
      }
  },
  {
      "id": 91525,
      "name": "Rune supérieure des Zéphyrites",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Toutes les statistiques +10",
              "Toutes les statistiques +12",
              "Toutes les statistiques +14",
              "Toutes les statistiques +16",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "des Zéphyrites"
      }
  },
  {
      "id": 91529,
      "name": "Rune de Dwayna supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Guérison +25",
              "Durée de Régénération +10%",
              "Guérison +50",
              "Durée de Régénération +20%",
              "Guérison +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Dwayna"
      }
  },
  {
      "id": 91530,
      "name": "Rune de charisme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'avantage +5%",
              "Toutes les statistiques +12",
              "Durée d'avantage +10%",
              "Toutes les statistiques +16",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de charisme"
      }
  },
  {
      "id": 91533,
      "name": "Rune de la liche supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée d'altération +5%",
              "Vitalité +50",
              "Durée d'altération +10%",
              "Vitalité +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la liche"
      }
  },
  {
      "id": 91536,
      "name": "Rune légendaire",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": ""
      }
  },
  {
      "id": 91538,
      "name": "Rune de l'Incendiaire supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Célérité +10%",
              "Dégâts par altération +50",
              "Durée d'avantage +10%",
              "Dégâts par altération +100",
              "Durée de Célérité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Incendiaire"
      }
  },
  {
      "id": 91541,
      "name": "Rune de rôdeur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Férocité +35",
              "Précision +50",
              "Férocité +65",
              "Précision +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rôdeur"
      }
  },
  {
      "id": 91545,
      "name": "Rune de vampirisme supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Vitalité +35",
              "Puissance +50",
              "Vitalité +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de vampirisme"
      }
  },
  {
      "id": 91547,
      "name": "Rune d'air supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Férocité +25",
              "Durée de Rapidité +10%",
              "Férocité +50",
              "Durée de Rapidité +20%",
              "Férocité +100",
              "Durée de Rapidité +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'air"
      }
  },
  {
      "id": 91550,
      "name": "Rune de perplexité supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Durée de Confusion +10%",
              "Dégâts par altération +50",
              "Durée de Confusion +20%",
              "Dégâts par altération +100",
              "Durée de Confusion +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de perplexité"
      }
  },
  {
      "id": 91551,
      "name": "Rune de fantassin supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Robustesse +35",
              "Vitalité +50",
              "Robustesse +65",
              "Vitalité +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de fantassin"
      }
  },
  {
      "id": 91553,
      "name": "Rune de profanation supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Vitalité +35",
              "Dégâts par altération +50",
              "Vitalité +65",
              "Dégâts par altération +100",
              "Durée d'Empoisonnement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de profanation"
      }
  },
  {
      "id": 91556,
      "name": "Rune de pitié supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Guérison +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de pitié"
      }
  },
  {
      "id": 91557,
      "name": "Rune de corsaire supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée de Pouvoir +20%",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de corsaire"
      }
  },
  {
      "id": 91560,
      "name": "Rune de l'Holographiste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Vitalité +35",
              "Puissance +50",
              "Vitalité +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de l'Holographiste"
      }
  },
  {
      "id": 91564,
      "name": "Rune d'Hoelbrak supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Pouvoir +10%",
              "Puissance +50",
              "Durée d'altération subie -10%",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'Hoelbrak"
      }
  },
  {
      "id": 91565,
      "name": "Rune du chronomancien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du chronomancien"
      }
  },
  {
      "id": 91566,
      "name": "Rune de Melandru supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Vitalité +35",
              "Robustesse +50",
              "Durée d'altération subie -10%",
              "Robustesse +100",
              "Durée d'altération subie -10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Melandru"
      }
  },
  {
      "id": 91567,
      "name": "Rune de nécromant supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Vitalité +35",
              "Dégâts par altération +50",
              "Vitalité +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de nécromant"
      }
  },
  {
      "id": 91568,
      "name": "Rune du Mirage supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Robustesse +35",
              "Dégâts par altération +50",
              "Robustesse +65",
              "Dégâts par altération +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Mirage"
      }
  },
  {
      "id": 91570,
      "name": "Rune de gardien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Guérison +35",
              "Robustesse +50",
              "Guérison +65",
              "Robustesse +100",
              "Robustesse +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de gardien"
      }
  },
  {
      "id": 91572,
      "name": "Rune de Rata Sum supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Durée d'Empoisonnement +10%",
              "Précision +50",
              "Durée de Faiblesse +20%",
              "Précision +100",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de Rata Sum"
      }
  },
  {
      "id": 91573,
      "name": "Rune du Renégat supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Férocité +35",
              "Dégâts par altération +50",
              "Férocité +65",
              "Dégâts par altération +100",
              "Dégâts par altération +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Renégat"
      }
  },
  {
      "id": 91576,
      "name": "Rune d'aventurier supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Dégâts par altération +25",
              "Puissance +35",
              "Dégâts par altération +50",
              "Puissance +65",
              "Dégâts par altération +100",
              "Puissance +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "d'aventure"
      }
  },
  {
      "id": 91578,
      "name": "Rune du faucheur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du faucheur"
      }
  },
  {
      "id": 91579,
      "name": "Rune de voleur supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Précision +25",
              "Dégâts par altération +35",
              "Précision +50",
              "Dégâts par altération +65",
              "Précision +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de voleur"
      }
  },
  {
      "id": 91580,
      "name": "Rune de glace supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée de Givre +10%",
              "Vitalité +50",
              "Durée de Givre +20%",
              "Vitalité +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de glace"
      }
  },
  {
      "id": 91581,
      "name": "Rune du Roi Dément supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'altération +5%",
              "Puissance +50",
              "Durée de Saignement +20%",
              "Puissance +100",
              "Durée de Saignement +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Roi Dément"
      }
  },
  {
      "id": 91582,
      "name": "Rune du mécatronicien supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Robustesse +35",
              "Puissance +50",
              "Robustesse +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du mécatronicien"
      }
  },
  {
      "id": 91583,
      "name": "Rune du cataclyste supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Toutes les statistiques +8",
              "Durée d'altération +5%",
              "Toutes les statistiques +12",
              "Durée d'altération +10%",
              "Toutes les statistiques +16",
              "Durée d'altération +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du cataclyste"
      }
  },
  {
      "id": 91585,
      "name": "Rune du héraut supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Robustesse +25",
              "Durée d'avantage +5%",
              "Robustesse +50",
              "Durée d'avantage +10%",
              "Robustesse +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du héraut"
      }
  },
  {
      "id": 91587,
      "name": "Rune de rayonnement supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Durée d'avantage +5%",
              "Vitalité +50",
              "Durée d'avantage +10%",
              "Vitalité +100",
              "Durée d'avantage +10%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de rayonnement"
      }
  },
  {
      "id": 91588,
      "name": "Rune de la Citadelle supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée de Fureur +10%",
              "Puissance +50",
              "Durée de Fureur +20%",
              "Puissance +100",
              "Durée de Fureur +20%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la Citadelle"
      }
  },
  {
      "id": 91590,
      "name": "Rune du Brisesort supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Précision +35",
              "Puissance +50",
              "Précision +65",
              "Puissance +100",
              "Vitalité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "du Brisesort"
      }
  },
  {
      "id": 91591,
      "name": "Rune de montée en puissance supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Vitesse de déplacement +25%"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de montée en puissance"
      }
  },
  {
      "id": 91592,
      "name": "Rune de la meute supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Puissance +25",
              "Durée d'avantage +5%",
              "Puissance +50",
              "Durée d'avantage +10%",
              "Puissance +100",
              "Précision +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de la meute"
      }
  },
  {
      "id": 91593,
      "name": "Rune de guivre supérieure",
      "type": "UpgradeComponent",
      "rarity": "Legendary",
      "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
      "details": {
          "type": "Rune",
          "flags": [
              "HeavyArmor",
              "LightArmor",
              "MediumArmor"
          ],
          "infusion_upgrade_flags": [],
          "bonuses": [
              "Vitalité +25",
              "Férocité +35",
              "Vitalité +50",
              "Férocité +65",
              "Vitalité +100",
              "Férocité +125"
          ],
          "attribute_adjustment": 0,
          "infix_upgrade": {
              "id": 112,
              "attributes": []
          },
          "suffix": "de guivre"
      }
  },
  {
    "id": 91595,
    "name": "Rune d'érudit supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Puissance +25",
            "Férocité +35",
            "Puissance +50",
            "Férocité +65",
            "Puissance +100",
            "Férocité +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "d'érudit"
    }
  },
  {
    "id": 91599,
    "name": "Rune du Centaure supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Puissance +25",
            "Durée de Rapidité +10%",
            "Puissance +50",
            "Durée de Rapidité +20%",
            "Puissance +100",
            "Durée de Rapidité +20%"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "du Centaure"
    }
  },
  {
    "id": 91602,
    "name": "Rune d'aristocratie supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Dégâts par altération +25",
            "Durée de Pouvoir +10%",
            "Dégâts par altération +50",
            "Durée de Pouvoir +20%",
            "Dégâts par altération +100",
            "Durée de Pouvoir +20%"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "d'aristocratie"
    }
  },
  {
    "id": 91605,
    "name": "Rune de sanctuaire supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Vitalité +25",
            "Durée d'avantage +5%",
            "Vitalité +50",
            "Durée d'avantage +10%",
            "Vitalité +100",
            "Vitalité +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "de sanctuaire"
    }
  },
  {
    "id": 91608,
    "name": "Rune d'infiltration supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Puissance +25",
            "Précision +35",
            "Puissance +50",
            "Précision +65",
            "Puissance +100",
            "Précision +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "d'infiltration"
    }
  },
  {
    "id": 91627,
    "name": "Rune de Renaissance supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Guérison +25",
            "Durée d'avantage +5%",
            "Guérison +50",
            "Durée d'avantage +10%",
            "Guérison +100",
            "Robustesse +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "de Renaissance"
    }
  },
  {
    "id": 91638,
    "name": "Rune d'altruisme supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Guérison +25",
            "Durée d'avantage +5%",
            "Guérison +50",
            "Durée d'avantage +10%",
            "Guérison +100",
            "Vitalité +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "d'altruisme"
    }
  },
  {
    "id": 91639,
    "name": "Rune de bonté de la nature supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Guérison +25",
            "Durée d'altération subie -5%",
            "Guérison +50",
            "Durée d'altération subie -10%",
            "Guérison +100",
            "Durée d'altération subie -10%"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "de bonté de la nature"
    }
  },
  {
    "id": 91641,
    "name": "Rune d'antitoxine supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Dégâts par altération +25",
            "Durée d'altération subie -5%",
            "Dégâts par altération +50",
            "Durée d'altération subie -10%",
            "Dégâts par altération +100",
            "Vitalité +125"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "d'antitoxine"
    }
  },
  {
    "id": 91673,
    "name": "Rune des étoiles supérieure",
    "type": "UpgradeComponent",
    "rarity": "Legendary",
    "icon": "https:\/\/render.guildwars2.com\/file\/3CEECEBACCC4E7D25DBC79C7A4B5B2933AB01DE3\/2179567.png",
    "details": {
        "type": "Rune",
        "flags": [
            "HeavyArmor",
            "LightArmor",
            "MediumArmor"
        ],
        "infusion_upgrade_flags": [],
        "bonuses": [
            "Toutes les statistiques +8",
            "Durée de Faiblesse subie -30%",
            "Toutes les statistiques +12",
            "Durée de Givre et des Infirmités subis -30%",
            "Toutes les statistiques +16",
            "Durée d'altération subie -10%"
        ],
        "attribute_adjustment": 0,
        "infix_upgrade": {
            "id": 112,
            "attributes": []
        },
        "suffix": "des étoiles"
    }
  }
];

export const GW2_STATS_RUNES: GW2RuneOption[] = (() => {
  const seen = new Set<string>();
  const deduped = GW2_RUNES
    .filter((relic) => {
      if (!relic || !relic.name)
        return false;
      if (relic.name.includes('légendaire'))
        return false;

      const key = norm(relic.name);
      if (seen.has(key))
        return false;

      seen.add(key);
      return true;
    })
    .map((relic) => ({
      value: relic.id,
      label: relic.name.replace('Rune ', ''),
    }));

  deduped.sort((a, b) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' }) || a.value - b.value);
  return deduped;
})();

type GW2Sigils = { id: number, name: string, type: string, rarity: string, icon: string, details: any };
export const GW2_SIGILS: GW2Sigils[] =
[
    {
        "id": 24807,
        "name": "Cachet de massacre de fantômes mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/E70857C7599154B579E19903A2595053650F03DA\/340621.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 454,
                "buff": {
                    "skill_id": 9699,
                    "description": "Dégâts de frappe contre les fantômes +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de fantômes"
        }
    },
    {
        "id": 24808,
        "name": "Cachet de massacre de fantômes majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/4359561C0B763B437D0DB4F598A92958AFDA0116\/340622.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 455,
                "buff": {
                    "skill_id": 9700,
                    "description": "Dégâts de frappe contre les fantômes +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de fantômes"
        }
    },
    {
        "id": 24809,
        "name": "Cachet de massacre de fantômes supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/53B41B4FF6EBD8D45A52F79B5A74D2A6184C0408\/340623.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 456,
                "buff": {
                    "skill_id": 9701,
                    "description": "Dégâts de frappe contre les fantômes +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de fantômes"
        }
    },
    {
        "id": 24861,
        "name": "Cachet de chance mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/504DECC200E3D0B83E0857A4700EB90307BF0F3A\/221163.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 237,
                "buff": {
                    "skill_id": 9412,
                    "description": "Chance d'obtenir un avantage aléatoire à chaque ennemi tué 50%."
                },
                "attributes": []
            },
            "suffix": "de chance"
        }
    },
    {
        "id": 24862,
        "name": "Cachet de malédiction mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/48367EFEB6E9D6E7D272143DFED3386906EB1D23\/221164.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 458,
                "buff": {
                    "skill_id": 9702,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, votre prochaine attaque infligera 3 charges d'Empoisonnement pendant 4 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de malédiction"
        }
    },
    {
        "id": 24863,
        "name": "Cachet de célérité mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/189E0C31491DC9DAE65FBADAE2D54E7C4C329401\/221165.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1020,
                "buff": {
                    "skill_id": 24206,
                    "description": "Vous bénéficiez de Célérité pendant 3 secondes si vous neutralisez un ennemi. (Temps de recharge : 20 secondes)"
                },
                "attributes": []
            },
            "suffix": "de célérité"
        }
    },
    {
        "id": 24864,
        "name": "Cachet de célérité majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/483E71CD0D524C08FF08F3BE51050806A27D6B18\/221166.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1021,
                "buff": {
                    "skill_id": 24207,
                    "description": "Vous bénéficiez de Célérité pendant 4 secondes si vous neutralisez un ennemi. (Temps de recharge : 20 secondes)"
                },
                "attributes": []
            },
            "suffix": "de célérité"
        }
    },
    {
        "id": 24865,
        "name": "Cachet de célérité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/731850AB48F9944BB5FE4A050A71366C0903253E\/221167.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1019,
                "buff": {
                    "skill_id": 24208,
                    "description": "Vous bénéficiez de Célérité pendant 5 secondes si vous neutralisez un ennemi. (Temps de recharge : 20 secondes)"
                },
                "attributes": []
            },
            "suffix": "de célérité"
        }
    },
    {
        "id": 24866,
        "name": "Cachet d'impact mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/98C91534B4C45949E329EFB237669295649C2D03\/221168.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 556,
                "buff": {
                    "skill_id": 9716,
                    "description": "Dégâts de frappe contre les ennemis étourdis ou renversés +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "d'impact"
        }
    },
    {
        "id": 24867,
        "name": "Cachet d'impact majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/4E5DD75B291F40DDF6C4E4770DED0C2FC70F2C77\/221169.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 557,
                "buff": {
                    "skill_id": 9717,
                    "description": "Dégâts de frappe contre les ennemis étourdis ou renversés +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "d'impact"
        }
    },
    {
        "id": 24868,
        "name": "Cachet d'impact supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/D9ACA0C94D90A76B1C500D5DE6D62B6820FEDAE2\/221170.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 558,
                "buff": {
                    "skill_id": 9718,
                    "description": "Dégâts de frappe contre les ennemis étourdis ou renversés +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "d'impact"
        }
    },
    {
        "id": 36053,
        "name": "Cachet de la nuit supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/CFDC642093029E790C03381D73C703BDFFA9CDFF\/499391.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 561,
                "buff": {
                    "skill_id": 15268,
                    "description": "Les dégâts infligés augmentent de 3%, et de 7% supplémentaires durant la nuit."
                },
                "attributes": []
            },
            "suffix": "de la nuit"
        }
    },
    {
        "id": 36054,
        "name": "Cachet de la nuit majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/086BE89006344FE16BD31734C026C60D91AA2D09\/499392.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 562,
                "buff": {
                    "skill_id": 15269,
                    "description": "Les dégâts infligés augmentent de 2%, et de 5% supplémentaires durant la nuit."
                },
                "attributes": []
            },
            "suffix": "de la nuit"
        }
    },
    {
        "id": 36055,
        "name": "Cachet de la nuit mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/13CB0C64F646120D79DF9674E9E4303C517A1C05\/499393.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 563,
                "buff": {
                    "skill_id": 15270,
                    "description": "Les dégâts infligés augmentent de 1%, et de 3% supplémentaires durant la nuit."
                },
                "attributes": []
            },
            "suffix": "de la nuit"
        }
    },
    {
        "id": 38292,
        "name": "Cachet de générosité mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/6055C84FED6DA52A142EC76213A7BCFF189EF0A2\/526286.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 633,
                "buff": {
                    "skill_id": 16507,
                    "description": "Chance de transférer une altération à votre ennemi lors d'un coup critique 20%<br><c=@reminder>(Temps de recharge : 10 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de générosité"
        }
    },
    {
        "id": 38293,
        "name": "Cachet de générosité majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/02F25535F136E1CD1301A74CC6B7CD6AFEDFE0A8\/526287.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 634,
                "buff": {
                    "skill_id": 16508,
                    "description": "Chance de transférer une altération à votre ennemi lors d'un coup critique 40%<br><c=@reminder>(Temps de recharge : 10 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de générosité"
        }
    },
    {
        "id": 38294,
        "name": "Cachet de générosité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/19487F3F01F76165F79D0DCAEF3E7E3FFF5DFEFA\/526288.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 635,
                "buff": {
                    "skill_id": 16509,
                    "description": "Transfère une altération à un ennemi en cas de coup critique. <br><c=@reminder>(Temps de recharge : 6 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de générosité"
        }
    },
    {
        "id": 44942,
        "name": "Cachet d'explosion mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/FDF85F32FF2914C8620ECFAD4BD47F973819D601\/619701.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 744,
                "buff": {
                    "skill_id": 20472,
                    "description": "Dégâts par altération +1%"
                },
                "attributes": []
            },
            "suffix": "d'explosion"
        }
    },
    {
        "id": 44943,
        "name": "Cachet d'explosion majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/23BB0880D81AE1C4B60D0C0297F9E1111D0A7352\/619702.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 747,
                "buff": {
                    "skill_id": 20473,
                    "description": "Dégâts par altération +3%"
                },
                "attributes": []
            },
            "suffix": "d'explosion"
        }
    },
    {
        "id": 44944,
        "name": "Cachet d'explosion supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/7ABFCEDF80329157F734FD56B293765D9B940FAD\/619703.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 750,
                "buff": {
                    "skill_id": 20474,
                    "description": "Dégâts par altération +5%"
                },
                "attributes": []
            },
            "suffix": "d'explosion"
        }
    },
    {
        "id": 44945,
        "name": "Cachet du renouveau mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/2AFEFCED5B7F09EF5EA59368BF42DE1908E93695\/619704.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 743,
                "buff": {
                    "skill_id": 20469,
                    "description": "Soigne les alliés à proximité lors du changement d'arme (rayon de 180°) <br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "du renouveau"
        }
    },
    {
        "id": 44946,
        "name": "Cachet du renouveau majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/EB6B3462F4459B07A02A07710F2C10A90AA6A37E\/619705.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 746,
                "buff": {
                    "skill_id": 20470,
                    "description": "Soigne les alliés à proximité lors du changement d'arme (rayon de 240°) <br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "du renouveau"
        }
    },
    {
        "id": 44947,
        "name": "Cachet du renouveau supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/F3F0730D5FEE09A7340E2E24E35A7AF304EDAAB7\/619706.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 749,
                "buff": {
                    "skill_id": 20471,
                    "description": "Soigne les alliés à proximité lors du changement d'arme (rayon de 360°) <br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "du renouveau"
        }
    },
    {
        "id": 44948,
        "name": "Cachet de malice mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/7396B40F4A32F91DCB0BB04F9171F32FD040C5EE\/619707.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 745,
                "buff": {
                    "skill_id": 20466,
                    "description": "Durée d'altération +5%."
                },
                "attributes": []
            },
            "suffix": "de malice"
        }
    },
    {
        "id": 44949,
        "name": "Cachet de malice majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/FABB48962E60E6D8C625FF76760B9C080877157A\/619708.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 748,
                "buff": {
                    "skill_id": 20467,
                    "description": "Durée d'altération +7%."
                },
                "attributes": []
            },
            "suffix": "de malice"
        }
    },
    {
        "id": 44950,
        "name": "Cachet de malice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/797D052CB4EA63A61A3225962128D197ACB3ED17\/619709.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 751,
                "buff": {
                    "skill_id": 20468,
                    "description": "Durée d'altération +10%."
                },
                "attributes": []
            },
            "suffix": "de malice"
        }
    },
    {
        "id": 48911,
        "name": "Cachet de tourment supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/E42EB6198022E5B4D71C5EE41465DD4EB84A0465\/665778.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 763,
                "buff": {
                    "skill_id": 21824,
                    "description": "En cas de coup critique, vous infligez 2 charges de Tourment pendant 5 secondes aux ennemis proches de votre cible. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de tourment"
        }
    },
    {
        "id": 67913,
        "name": "Cachet du vice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/AE0A1C7816B56296FEA527E1D01376491374195A\/941026.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1068,
                "buff": {
                    "skill_id": 25875,
                    "description": "Applique 2 charges d'Empoisonnement pendant 4 secondes aux ennemis à proximité lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 8 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du vice"
        }
    },
    {
        "id": 68434,
        "name": "Cachet d'espièglerie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/14EB0E671F6E2FB27126A602B938682D3C6F4BC6\/924723.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1074,
                "buff": {
                    "skill_id": 26275,
                    "description": "Lance jusqu'à 2 boules de neige sur les ennemis devant vous et leur inflige Aveuglement si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'espièglerie"
        }
    },
    {
        "id": 68436,
        "name": "Cachet d'espièglerie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/7D0CE9A3627F4957BEA2CFE39802EDB4503463D2\/924725.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1072,
                "buff": {
                    "skill_id": 26274,
                    "description": "Lance jusqu'à 4 boules de neige sur les ennemis devant vous et leur inflige Aveuglement si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'espièglerie"
        }
    },
    {
        "id": 68439,
        "name": "Cachet d'espièglerie mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/B43EFAD8ED47F27BC22343935F4F01F167240832\/924728.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1079,
                "buff": {
                    "skill_id": 26262,
                    "description": "Lance une boule de neige sur un ennemi devant vous et lui inflige Aveuglement si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'espièglerie"
        }
    },
    {
        "id": 24546,
        "name": "Cachet de feu majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/2A086133CE143D2CAC09B12B015B78B4399D1C61\/220972.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 190,
                "buff": {
                    "skill_id": 9443,
                    "description": "Déclenche une Explosion de flammes dans un rayon de 240 lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 7 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de feu"
        }
    },
    {
        "id": 24547,
        "name": "Cachet de feu mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/C37E722CFA07065001DC29BA390E0FCB675D6035\/220973.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 191,
                "buff": {
                    "skill_id": 9280,
                    "description": "Déclenche une Explosion de flammes dans un rayon de 240 lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de feu"
        }
    },
    {
        "id": 24548,
        "name": "Cachet de feu supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/AFFE7977FCE450E8105EBADA7436050CB7011BDB\/220678.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 189,
                "buff": {
                    "skill_id": 9444,
                    "description": "Déclenche une Explosion de flammes dans un rayon de 240 lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de feu"
        }
    },
    {
        "id": 24549,
        "name": "Cachet d'eau mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/B9BF97AC77B0FEBC1BA23CE8A0B9CDA66332580F\/220974.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 192,
                "buff": {
                    "skill_id": 9294,
                    "description": "Vous bénéficiez de 30% de chances supplémentaires de soigner vos alliés dans un rayon de 180 autour de la cible lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 10 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'eau"
        }
    },
    {
        "id": 24550,
        "name": "Cachet d'eau majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/002B0CA39136BA682966BFA6301405245A666C3B\/220975.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 193,
                "buff": {
                    "skill_id": 9445,
                    "description": "Vous bénéficiez de 40% de chances supplémentaires de soigner vos alliés dans un rayon de 240 autour de la cible lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 7 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'eau"
        }
    },
    {
        "id": 24551,
        "name": "Cachet d'eau supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/F117A4F536901B0C69A618EEEB0DA6BDEB075FD8\/220684.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 194,
                "buff": {
                    "skill_id": 9446,
                    "description": "Soigne vos alliés dans un rayon de 360 autour de la cible lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'eau"
        }
    },
    {
        "id": 24552,
        "name": "Cachet d'air mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/AEA3A8CE6023B90761711CBC981732356AD00205\/220976.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 195,
                "buff": {
                    "skill_id": 9291,
                    "description": "Vous déclenchez un éclair foudroyant lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 7 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'air"
        }
    },
    {
        "id": 24553,
        "name": "Cachet d'air majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/FF4FD0584B30757CE77CEFC716160AF040437A90\/220977.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 196,
                "buff": {
                    "skill_id": 9447,
                    "description": "Vous déclenchez un éclair foudroyant lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'air"
        }
    },
    {
        "id": 24554,
        "name": "Cachet d'air supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/C337CC61DF2F5EE44B7D053EFF33059111024444\/220676.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 197,
                "buff": {
                    "skill_id": 9448,
                    "description": "Vous déclenchez un éclair foudroyant lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'air"
        }
    },
    {
        "id": 24555,
        "name": "Cachet de glace supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/10E0D93F4B303CD03F6FEE0C5AAEEB070E0EFAC1\/220680.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 200,
                "buff": {
                    "skill_id": 9450,
                    "description": "Inflige Givre à un ennemi pendant 2 secondes si vous le frappez par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 10 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de glace"
        }
    },
    {
        "id": 24556,
        "name": "Cachet de glace majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/105B5393BC6B17D641AECC133F410126C7592702\/220978.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 199,
                "buff": {
                    "skill_id": 9449,
                    "description": "Inflige Givre à un ennemi pendant 2 secondes si vous le frappez par le côté. <c=@reminder>(Temps de recharge : 15 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de glace"
        }
    },
    {
        "id": 24557,
        "name": "Cachet de glace mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/73AC614458AF591073381A0B262C28B0FEFC5E3B\/220979.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 198,
                "buff": {
                    "skill_id": 9279,
                    "description": "Inflige Givre à un ennemi pendant 2 secondes si vous le frappez par le côté. <c=@reminder>(Temps de recharge : 20 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de glace"
        }
    },
    {
        "id": 24558,
        "name": "Cachet de terre mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/1CEAD10096D3FB1B034F7D0A26090AEA387C28E4\/220980.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 201,
                "buff": {
                    "skill_id": 9278,
                    "description": "Chance d'infliger Saignement pendant 3 secondes lors d'un critique de 30%<br><c=@reminder>(Temps de recharge : 2 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de terre"
        }
    },
    {
        "id": 24559,
        "name": "Cachet de terre majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/C6F2F1B3013DCBAD1CE1E2D85DF30CB5D5337A05\/220981.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 202,
                "buff": {
                    "skill_id": 9451,
                    "description": "Chance d'infliger Saignement pendant 4 secondes lors d'un critique de 45%<br><c=@reminder>(Temps de recharge : 2 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de terre"
        }
    },
    {
        "id": 24560,
        "name": "Cachet de terre supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/251EE3B8B5ADB8D7F7A35DBAEFABA35AEACDF51B\/220677.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 203,
                "buff": {
                    "skill_id": 9452,
                    "description": "Vous infligez Saignement pendant 6 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de terre"
        }
    },
    {
        "id": 24561,
        "name": "Cachet de rage supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/15310B48271FC15332C65C5E02FEC4FFF298B652\/220679.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 204,
                "buff": {
                    "skill_id": 9295,
                    "description": "Vous bénéficiez de Célérité pendant 3 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 20 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de rage"
        }
    },
    {
        "id": 24562,
        "name": "Cachet de force supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/71C00204BDD7FC11AAE1906FC2EF7D37A35DF82E\/220682.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 207,
                "buff": {
                    "skill_id": 9454,
                    "description": "Vous bénéficiez de Pouvoir pendant 10 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de force"
        }
    },
    {
        "id": 24563,
        "name": "Cachet de force majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/9E796026D9E2F6550D959054EBB60D416E72A5EF\/220982.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 206,
                "buff": {
                    "skill_id": 9453,
                    "description": "Vous bénéficiez de Pouvoir pendant 7 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de force"
        }
    },
    {
        "id": 24564,
        "name": "Cachet de force mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/08357DEE4E055A09F82A3D2DC94B9A1C96ED5404\/220983.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 205,
                "buff": {
                    "skill_id": 9277,
                    "description": "Vous bénéficiez de Pouvoir pendant 5 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de force"
        }
    },
    {
        "id": 24565,
        "name": "Cachet de fragilité mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/5976D7EC1D0F307E5E801E6FCE9ED7291C5103AD\/220984.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 208,
                "buff": {
                    "skill_id": 9287,
                    "description": "Inflige Vulnérabilité pendant 5 secondes si vous frappez un ennemi par le côté. <c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de fragilité"
        }
    },
    {
        "id": 24566,
        "name": "Cachet de fragilité majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/421080E3E3C918F3C821CFF4109A4A15BB0EDA56\/220985.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 209,
                "buff": {
                    "skill_id": 9455,
                    "description": "Inflige Vulnérabilité pendant 8 secondes si vous frappez un ennemi par le côté. <c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de fragilité"
        }
    },
    {
        "id": 24567,
        "name": "Cachet de fragilité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/58EF3FB57B16D9F12ACCC2E67225CC2697C7C866\/220683.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 210,
                "buff": {
                    "skill_id": 9456,
                    "description": "Inflige 2 charges de Vulnérabilité pendant 8 secondes si vous frappez un ennemi par-derrière, par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de fragilité"
        }
    },
    {
        "id": 24568,
        "name": "Cachet de sang mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/64A79CCD42D858AA7FF39A0CF1AEEC800FE1966F\/220986.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 211,
                "buff": {
                    "skill_id": 9288,
                    "description": "Vous volez de la santé lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sang"
        }
    },
    {
        "id": 24569,
        "name": "Cachet de sang majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/010AF830E933C3C4D1B9912C4102D2A5FF021D91\/220987.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 212,
                "buff": {
                    "skill_id": 9457,
                    "description": "Vole la santé d'un ennemi lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 7 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sang"
        }
    },
    {
        "id": 24570,
        "name": "Cachet de sang supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/BFD4F5E6A8B95866BBA7CDC0E8920D0346337934\/220681.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 213,
                "buff": {
                    "skill_id": 9458,
                    "description": "Vole la santé d'un ennemi lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sang"
        }
    },
    {
        "id": 24571,
        "name": "Cachet de pureté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/C3E907DE24CF72CE490639710F46CDCD917D5B06\/220745.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 214,
                "buff": {
                    "skill_id": 9289,
                    "description": "Supprime une altération si vous frappez un ennemi par le côté ou s'il est rebelle. <br><c=@reminder>(Temps de recharge : 4 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de pureté"
        }
    },
    {
        "id": 24572,
        "name": "Cachet d'invalidation supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/B926E1026E6E271D3B9F9A177710E3A8C801FFF3\/220744.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 215,
                "buff": {
                    "skill_id": 9290,
                    "description": "Supprime un avantage d'un ennemi si vous le frappez par le côté ou s'il est rebelle. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'invalidation"
        }
    },
    {
        "id": 24573,
        "name": "Cachet de soif de sang mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/2BE192D72AD8F3DF06AA54FD12066960A349C8F2\/220988.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 216,
                "buff": {
                    "skill_id": 9282,
                    "description": "Vous obtenez une charge qui augmente de +2 votre Puissance à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de soif de sang"
        }
    },
    {
        "id": 24574,
        "name": "Cachet de soif de sang majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/362F43FD9D03AE3D0A2E6B49F7720D010D4FA017\/220989.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 217,
                "buff": {
                    "skill_id": 9296,
                    "description": "Vous obtenez une charge qui augmente de +7 votre Puissance à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de soif de sang"
        }
    },
    {
        "id": 24575,
        "name": "Cachet de soif de sang supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/77AAE10D3E03036D6E00642DEF01E5DF3468524F\/220673.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 218,
                "buff": {
                    "skill_id": 9297,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Puissance à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de soif de sang"
        }
    },
    {
        "id": 24576,
        "name": "Cachet de corruption mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/066A6C02FB099CD023931E5A0A534E18FA7F5A1F\/220990.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 219,
                "buff": {
                    "skill_id": 9379,
                    "description": "Vous obtenez une charge qui augmente de +2 vos Dégâts par altération à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de corruption"
        }
    },
    {
        "id": 24577,
        "name": "Cachet de corruption majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/0267261E50A5D8ACE7CAA9C55D2FAFB84C5C606A\/220991.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 220,
                "buff": {
                    "skill_id": 9378,
                    "description": "Vous obtenez une charge qui augmente de +7 vos Dégâts par altération à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de corruption"
        }
    },
    {
        "id": 24578,
        "name": "Cachet de corruption supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/D574E4D29FA31DB815F76FD5FE4CA1EBFACA22B9\/220668.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 221,
                "buff": {
                    "skill_id": 9377,
                    "description": "Vous obtenez une charge qui augmente de +10 vos Dégâts par altération à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de corruption"
        }
    },
    {
        "id": 24579,
        "name": "Cachet de perception majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/9CBD050D236E76282C16460BD4C4A01006DCD3A6\/340592.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 223,
                "buff": {
                    "skill_id": 9381,
                    "description": "Vous obtenez une charge qui augmente de +7 votre Précision à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de perception"
        }
    },
    {
        "id": 24580,
        "name": "Cachet de perception supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/FA237EF63BC111701FAEC13E312A022E9D44ED93\/340593.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 224,
                "buff": {
                    "skill_id": 9382,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Précision à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de perception"
        }
    },
    {
        "id": 24581,
        "name": "Cachet de vie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/01D533A1E2373B80A7ED246075BA45060C765557\/220992.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 226,
                "buff": {
                    "skill_id": 9390,
                    "description": "Vous obtenez une charge qui augmente de +7 votre Guérison à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de vie"
        }
    },
    {
        "id": 24582,
        "name": "Cachet de vie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/A7AE0E9D0DF64B69EF309D93E44FFAA90859ABA0\/220670.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 227,
                "buff": {
                    "skill_id": 9389,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Guérison à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de vie"
        }
    },
    {
        "id": 24583,
        "name": "Cachet de démons supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/52D5D9FE5E0B9091415092A9E21DE830010D2E0E\/220674.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 230,
                "buff": {
                    "skill_id": 9395,
                    "description": "Augmente la durée de Tourment infligé de 20%."
                },
                "attributes": []
            },
            "suffix": "d'invocation démoniaque"
        }
    },
    {
        "id": 24584,
        "name": "Cachet de bienveillance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/0147AE350DEB5561D427EC41F6F4B35523707320\/220672.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 233,
                "buff": {
                    "skill_id": 9401,
                    "description": "Vous obtenez une charge qui augmente de 0,5% les soins conférés aux autres alliés à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bienveillance"
        }
    },
    {
        "id": 24585,
        "name": "Cachet de bienveillance mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/7D2CCD49CD52B9F896E7E13B5354287ACA3D7A7D\/220993.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 231,
                "buff": {
                    "skill_id": 9403,
                    "description": "Vous obtenez une charge qui augmente de 0,3% les soins conférés aux autres alliés à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bienveillance"
        }
    },
    {
        "id": 24586,
        "name": "Cachet de bienveillance majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/DCF110D5DB069E00B7074554C77CE0C1A72F036E\/220994.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 232,
                "buff": {
                    "skill_id": 9402,
                    "description": "Vous obtenez une charge qui augmente de 0,4% les soins conférés aux autres alliés à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bienveillance"
        }
    },
    {
        "id": 24587,
        "name": "Cachet de vitesse mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/711A3D1E05217250029D01A2B19042690BDC112E\/220995.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 234,
                "buff": {
                    "skill_id": 9406,
                    "description": "Confère Rapidité pendant 10 secondes à chaque ennemi tué"
                },
                "attributes": []
            },
            "suffix": "de vitesse"
        }
    },
    {
        "id": 24588,
        "name": "Cachet de vitesse majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/286CB822EA9FDD683C6B114207BC0E1E6DE33743\/220996.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 235,
                "buff": {
                    "skill_id": 9405,
                    "description": "Confère Rapidité pendant 14 secondes à chaque ennemi tué"
                },
                "attributes": []
            },
            "suffix": "de vitesse"
        }
    },
    {
        "id": 24589,
        "name": "Cachet de vitesse supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/E2BE561DB46692BF67F7AF2FDCA21FCA5D250D36\/220675.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 236,
                "buff": {
                    "skill_id": 9404,
                    "description": "Confère Rapidité pendant 20 secondes à chaque ennemi tué"
                },
                "attributes": []
            },
            "suffix": "de vitesse"
        }
    },
    {
        "id": 24590,
        "name": "Cachet de chance majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/B12C03F39EC76E7B0E3703426E39F6E8DB0A2E0A\/220997.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 238,
                "buff": {
                    "skill_id": 9411,
                    "description": "Chance d'obtenir un avantage aléatoire après avoir tué un ennemi 50%."
                },
                "attributes": []
            },
            "suffix": "de chance"
        }
    },
    {
        "id": 24591,
        "name": "Cachet de chance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/A4A317BFD72846C27107A97EED7508A10606D50A\/220998.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 239,
                "buff": {
                    "skill_id": 9410,
                    "description": "Chance d'obtenir un avantage aléatoire à chaque ennemi tué 75%."
                },
                "attributes": []
            },
            "suffix": "de chance"
        }
    },
    {
        "id": 24592,
        "name": "Cachet d'endurance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/970DD319EC0E7455E941CD5DA840C10EA6EF160E\/220669.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 240,
                "buff": {
                    "skill_id": 9414,
                    "description": "Votre endurance se recharge à chaque ennemi tué."
                },
                "attributes": []
            },
            "suffix": "d'endurance"
        }
    },
    {
        "id": 24593,
        "name": "Cachet de restauration majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/35762B7FD5C598C0362A66CB6B5ABC5CE037CCAB\/220999.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 228,
                "buff": {
                    "skill_id": 9298,
                    "description": "Vous regagnez de la santé lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de restauration"
        }
    },
    {
        "id": 24594,
        "name": "Cachet de restauration supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/0877D8E26B3CE964B3A7C2C324C4629B04362A09\/220671.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 229,
                "buff": {
                    "skill_id": 9413,
                    "description": "Vous regagnez de la santé lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de restauration"
        }
    },
    {
        "id": 24595,
        "name": "Cachet d'hydromancie mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/0729CED7DFF7F9DBD548E7A2420776DF1E33590B\/221000.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 246,
                "buff": {
                    "skill_id": 9426,
                    "description": "Inflige des dégâts et Givre aux ennemis à proximité pendant 1 seconde si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de l'hydromancien"
        }
    },
    {
        "id": 24596,
        "name": "Cachet d'hydromancie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/39CBE5E0E4EDAB33469B0DB8AF93A192920205EF\/221001.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 247,
                "buff": {
                    "skill_id": 9429,
                    "description": "Vous infligez des dégâts et Givre aux ennemis à proximité pendant 1,5 seconde si vous changez d'arme en combat pour équiper celle-ci<br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de l'hydromancien"
        }
    },
    {
        "id": 24597,
        "name": "Cachet d'hydromancie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/B5F3E2021863079919299707290698504B5C7E90\/220689.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 248,
                "buff": {
                    "skill_id": 9430,
                    "description": "Inflige des dégâts et Givre aux ennemis à proximité pendant 2 secondes si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de l'hydromancien"
        }
    },
    {
        "id": 24598,
        "name": "Cachet de sangsue majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/A469E4E2C6D02AA1DC611ABE1ED8A368E57CCFC4\/221002.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 241,
                "buff": {
                    "skill_id": 9419,
                    "description": "Votre prochaine attaque volera une petite quantité de santé si vous changez d'arme en combat pour équiper celle-ci<br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sangsue"
        }
    },
    {
        "id": 24599,
        "name": "Cachet de sangsue supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/BC276BC8AD2497A1E5A905CBDB20425CF2133D78\/220690.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 242,
                "buff": {
                    "skill_id": 9420,
                    "description": "Votre prochaine attaque volera de la santé si vous changez d'arme en combat pour équiper celle-ci<br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sangsue"
        }
    },
    {
        "id": 24600,
        "name": "Cachet de Vision supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/1F41DBAFFA5979D7496F2BB9E4D9AE0F2FA4F940\/220685.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 243,
                "buff": {
                    "skill_id": 53276,
                    "description": "Vous infligez des coups critiques à un ennemi pendant 3 secondes si vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de Vision"
        }
    },
    {
        "id": 24601,
        "name": "Cachet de combat supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/A25A5E7D74A6B293B5C6B8EC7EDA1A06C649CBEF\/220691.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 245,
                "buff": {
                    "skill_id": 9424,
                    "description": "Vous obtenez 5 charges de Pouvoir pendant 12 secondes lorsque vous changez d'arme en combat pour équiper celle-ci. (Temps de recharge : 9 secondes)"
                },
                "attributes": []
            },
            "suffix": "de combat"
        }
    },
    {
        "id": 24602,
        "name": "Cachet de combat majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/70F00CDADC69E69EBE11490E0F047CDA9474C140\/221003.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 244,
                "buff": {
                    "skill_id": 9423,
                    "description": "Vous obtenez 3 charges de Pouvoir pendant 12 secondes lorsque vous changez d'arme en combat pour équiper celle-ci. (Temps de recharge : 9 secondes)"
                },
                "attributes": []
            },
            "suffix": "de combat"
        }
    },
    {
        "id": 24603,
        "name": "Cachet de géomancie mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/B4F6FC2ABADE9335543CA4450F33A85F28C157F2\/221004.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 249,
                "buff": {
                    "skill_id": 9434,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, la prochaine attaque infligera Saignement aux ennemis à proximité pendant 4 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du géomancien"
        }
    },
    {
        "id": 24604,
        "name": "Cachet de géomancie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/3134A1A14F47029DD01F7859DCA879089003DDD5\/221005.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 250,
                "buff": {
                    "skill_id": 9435,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, la prochaine attaque infligera Saignement aux ennemis à proximité pendant 6 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du géomancien"
        }
    },
    {
        "id": 24605,
        "name": "Cachet de géomancie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/B79B430645DDF54E6792909A52F5CA40A4911407\/220687.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 251,
                "buff": {
                    "skill_id": 9436,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, la prochaine attaque infligera Saignement aux ennemis à proximité pendant 8 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du géomancien"
        }
    },
    {
        "id": 24606,
        "name": "Cachet d'énergie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/EB95AB9675047C78B2DCEAA820A71BC7370B076B\/221006.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 252,
                "buff": {
                    "skill_id": 9437,
                    "description": "Régénère 25% de votre endurance si vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'énergie"
        }
    },
    {
        "id": 24607,
        "name": "Cachet d'énergie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/3A064B97AB7D0E1F1250EFB5F06798A8FE623708\/220688.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 253,
                "buff": {
                    "skill_id": 9438,
                    "description": "Régénère 50% de votre endurance si vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'énergie"
        }
    },
    {
        "id": 24608,
        "name": "Cachet de malédiction majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/BF467D5DA2A6F13D6229D50908B6A3AD04A1D053\/221007.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 254,
                "buff": {
                    "skill_id": 9439,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, votre prochaine attaque infligera 3 charges d'Empoisonnement pendant 6 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de malédiction"
        }
    },
    {
        "id": 24609,
        "name": "Cachet de malédiction supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/6CE4D1D6E5392C4CC8BACA595E3393EBF208BEED\/220686.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 255,
                "buff": {
                    "skill_id": 9442,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, votre prochaine attaque infligera 3 charges d'Empoisonnement pendant 8 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de malédiction"
        }
    },
    {
        "id": 24610,
        "name": "Cachet d'agonie mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/D10642420E7205E09D3731C5645F0954FD76C6C4\/221008.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 256,
                "buff": {
                    "skill_id": 9299,
                    "description": "Augmente de 10% la durée des Saignements infligés"
                },
                "attributes": []
            },
            "suffix": "d'agonie"
        }
    },
    {
        "id": 24611,
        "name": "Cachet d'agonie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/DA440A54094699AC71373E3F3B5934B3954E5DF2\/221009.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 257,
                "buff": {
                    "skill_id": 9306,
                    "description": "Augmente de 15% la durée des Saignements infligés"
                },
                "attributes": []
            },
            "suffix": "d'agonie"
        }
    },
    {
        "id": 24612,
        "name": "Cachet d'agonie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/BAF34EB051D118F8A7C1645E0D940ED0660E6269\/220658.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 258,
                "buff": {
                    "skill_id": 9313,
                    "description": "Augmente de 20% la durée des Saignements infligés"
                },
                "attributes": []
            },
            "suffix": "d'agonie"
        }
    },
    {
        "id": 24613,
        "name": "Cachet de fermeté mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/5F089852CEDA66E947DC14B70661F806CAFD0D01\/221010.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 259,
                "buff": {
                    "skill_id": 9320,
                    "description": "Dégâts +1%"
                },
                "attributes": []
            },
            "suffix": "de fermeté"
        }
    },
    {
        "id": 24614,
        "name": "Cachet de fermeté majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/F4A0F502CD51B36C74ED1656C30BEC940307DFBB\/221011.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 260,
                "buff": {
                    "skill_id": 9321,
                    "description": "Dégâts +3%"
                },
                "attributes": []
            },
            "suffix": "de fermeté"
        }
    },
    {
        "id": 24615,
        "name": "Cachet de fermeté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/D7420E430D002E07382035EF0D0F77370C4EE6B8\/220662.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 261,
                "buff": {
                    "skill_id": 9322,
                    "description": "Dégâts +5%"
                },
                "attributes": []
            },
            "suffix": "de fermeté"
        }
    },
    {
        "id": 24616,
        "name": "Cachet d'exactitude mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/3ECFA3081802AC4D93E39D80AB7D096A3F0EA821\/221012.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 262,
                "buff": {
                    "skill_id": 9323,
                    "description": "Chance de coup critique +3%"
                },
                "attributes": []
            },
            "suffix": "d'exactitude"
        }
    },
    {
        "id": 24617,
        "name": "Cachet d'exactitude majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/45386AF86273400EF0E93856292E07BB7E65B65F\/221013.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 263,
                "buff": {
                    "skill_id": 9324,
                    "description": "Chance de coup critique +5%"
                },
                "attributes": []
            },
            "suffix": "d'exactitude"
        }
    },
    {
        "id": 24618,
        "name": "Cachet d'exactitude supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/4B0EFF29FD064E5E93E4F8616BE309A451450AED\/220661.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 264,
                "buff": {
                    "skill_id": 9325,
                    "description": "Chance de coup critique +7%"
                },
                "attributes": []
            },
            "suffix": "d'exactitude"
        }
    },
    {
        "id": 24619,
        "name": "Cachet de péril mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/3311D57B6B11240C35DAD7BDE9B669D12D396A02\/221014.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 265,
                "buff": {
                    "skill_id": 9300,
                    "description": "Augmente de 10% la durée des Vulnérabilités infligées"
                },
                "attributes": []
            },
            "suffix": "de péril"
        }
    },
    {
        "id": 24620,
        "name": "Cachet de péril majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/289C0151B980EB0A27C2A62251D9602215BEAFD7\/221015.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 266,
                "buff": {
                    "skill_id": 9311,
                    "description": "Augmente de 15% la durée des Vulnérabilités infligées"
                },
                "attributes": []
            },
            "suffix": "de péril"
        }
    },
    {
        "id": 24621,
        "name": "Cachet de péril supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/F9D2B90F653C555D08B2C62CAC7605AA2793929B\/220666.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 267,
                "buff": {
                    "skill_id": 9318,
                    "description": "Augmente de 20% la durée des Vulnérabilités infligées"
                },
                "attributes": []
            },
            "suffix": "de péril"
        }
    },
    {
        "id": 24622,
        "name": "Cachet de consumation mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/B7D3E8950008A506E80812F940F47F73F8BB48D9\/221016.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 268,
                "buff": {
                    "skill_id": 9301,
                    "description": "Augmente la durée des Brûlures infligées de 10%"
                },
                "attributes": []
            },
            "suffix": "de consumation"
        }
    },
    {
        "id": 24623,
        "name": "Cachet de consumation majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/0345432D40BBF6FFFDEBACD0ADF16AE61A182EEA\/221017.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 269,
                "buff": {
                    "skill_id": 9307,
                    "description": "Augmente la durée des Brûlures infligées de 15%"
                },
                "attributes": []
            },
            "suffix": "de consumation"
        }
    },
    {
        "id": 24624,
        "name": "Cachet de consumation supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/60AAB7109E5D679901E00DC066774EE5FB3E6052\/220659.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 270,
                "buff": {
                    "skill_id": 9314,
                    "description": "Augmente la durée des Brûlures infligées de 20%"
                },
                "attributes": []
            },
            "suffix": "de consumation"
        }
    },
    {
        "id": 24625,
        "name": "Cachet de boitement mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/736DEF53DC2E1C0B02220C9302F61AD70860DA4F\/221018.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 271,
                "buff": {
                    "skill_id": 9302,
                    "description": "Augmente de 10% la durée des Infirmités infligées"
                },
                "attributes": []
            },
            "suffix": "de boitement"
        }
    },
    {
        "id": 24626,
        "name": "Cachet de boitement majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/C924A6C4DFDB52A4FF6B362758532E09C4CED3C3\/221019.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 272,
                "buff": {
                    "skill_id": 9309,
                    "description": "Augmente de 15% la durée des Infirmités infligées"
                },
                "attributes": []
            },
            "suffix": "de boitement"
        }
    },
    {
        "id": 24627,
        "name": "Cachet de boitement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/AEB1F57BB591D53B3BD459445C42736722CDA8EE\/220660.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 273,
                "buff": {
                    "skill_id": 9316,
                    "description": "Augmente de 20% la durée des Infirmités infligées"
                },
                "attributes": []
            },
            "suffix": "de boitement"
        }
    },
    {
        "id": 24628,
        "name": "Cachet de frisson mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/4FD122E5B800B308FC962558D302191C37B80B33\/221020.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 274,
                "buff": {
                    "skill_id": 9303,
                    "description": "Augmente la durée de Givre infligé de 10%"
                },
                "attributes": []
            },
            "suffix": "de frisson"
        }
    },
    {
        "id": 24629,
        "name": "Cachet de frisson majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/C30BC6BE64F872FAEDCEEEE0DDFDF0326AE7E62C\/221021.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 275,
                "buff": {
                    "skill_id": 9308,
                    "description": "Augmente la durée de Givre infligé de 15%"
                },
                "attributes": []
            },
            "suffix": "de frisson"
        }
    },
    {
        "id": 24630,
        "name": "Cachet de frisson supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/F7C54D53F1CDB2094B9C4FEA2FA455ADC54492B4\/220663.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 276,
                "buff": {
                    "skill_id": 9315,
                    "description": "Augmente la durée de Givre infligé de 20%"
                },
                "attributes": []
            },
            "suffix": "de frisson"
        }
    },
    {
        "id": 24631,
        "name": "Cachet de venin mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/323B0F26CEFA35AD5C2FED10230602070E0FBC49\/221022.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 277,
                "buff": {
                    "skill_id": 9304,
                    "description": "Augmente de 10% la durée des Empoisonnements infligés"
                },
                "attributes": []
            },
            "suffix": "de venin"
        }
    },
    {
        "id": 24632,
        "name": "Cachet de venin supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/080B4F940A05E60A084AA4B1D230F923A1A47CEC\/220664.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 279,
                "buff": {
                    "skill_id": 9317,
                    "description": "Augmente de 20% la durée des Empoisonnements infligés"
                },
                "attributes": []
            },
            "suffix": "de venin"
        }
    },
    {
        "id": 24633,
        "name": "Cachet de venin majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/4F695470AEE5C82DC4C2BB651E063A49ADC56992\/221023.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 278,
                "buff": {
                    "skill_id": 9310,
                    "description": "Augmente de 15% la durée des Empoisonnements infligés"
                },
                "attributes": []
            },
            "suffix": "de venin"
        }
    },
    {
        "id": 24634,
        "name": "Cachet de faiblesse mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/4E5E0C2A1B7257F3052A2B0DDACC59DDA02E9610\/221024.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 280,
                "buff": {
                    "skill_id": 9305,
                    "description": "Augmente de 10% la durée des Faiblesses infligées"
                },
                "attributes": []
            },
            "suffix": "de faiblesse"
        }
    },
    {
        "id": 24635,
        "name": "Cachet de faiblesse majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/AC4DFF6D7A5EDC28DAA9C2B7A46B947DD1B94461\/221025.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 281,
                "buff": {
                    "skill_id": 9312,
                    "description": "Augmente de 15% la durée des Faiblesses infligées"
                },
                "attributes": []
            },
            "suffix": "de faiblesse"
        }
    },
    {
        "id": 24636,
        "name": "Cachet de faiblesse supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/33FB5EED4B3F16F3CC2538B178B645BE5CA67CF2\/220667.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 282,
                "buff": {
                    "skill_id": 9319,
                    "description": "Augmente de 20% la durée des Faiblesses infligées"
                },
                "attributes": []
            },
            "suffix": "de faiblesse"
        }
    },
    {
        "id": 24637,
        "name": "Cachet de paralysie mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/16CBE85537E245AD950279490FABC4C1D4F61E70\/221026.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 283,
                "buff": {
                    "skill_id": 9326,
                    "description": "Durée d'Etourdissement +10%"
                },
                "attributes": []
            },
            "suffix": "de paralysie"
        }
    },
    {
        "id": 24638,
        "name": "Cachet de paralysie majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/9BB56B0927392056CE27036453400B39140F9CBC\/221027.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 284,
                "buff": {
                    "skill_id": 9327,
                    "description": "Durée d'Etourdissement +20%"
                },
                "attributes": []
            },
            "suffix": "de paralysie"
        }
    },
    {
        "id": 24639,
        "name": "Cachet de paralysie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/0C1378BB6AADCB1C157332776C3476EBC66CD2DA\/220665.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 285,
                "buff": {
                    "skill_id": 9328,
                    "description": "Durée d'Etourdissement +30%"
                },
                "attributes": []
            },
            "suffix": "de paralysie"
        }
    },
    {
        "id": 24640,
        "name": "Cachet de massacre de morts-vivants mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/A9F11417F460751963F0210360AE2A511914CC34\/340594.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 286,
                "buff": {
                    "skill_id": 9329,
                    "description": "Dégâts de frappe contre les morts-vivants +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de morts-vivants"
        }
    },
    {
        "id": 24641,
        "name": "Cachet de massacre de morts-vivants majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/4F4B5EB9F60BE6A31E5DE7120F61E9E5571BD454\/340595.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 287,
                "buff": {
                    "skill_id": 9330,
                    "description": "Dégâts de frappe contre les morts-vivants +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de morts-vivants"
        }
    },
    {
        "id": 24642,
        "name": "Cachet de massacre de morts-vivants supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/3DDBA602C305D0766414DE693D62F71AAB915872\/340596.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 288,
                "buff": {
                    "skill_id": 9331,
                    "description": "Dégâts de frappe contre les morts-vivants +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de morts-vivants"
        }
    },
    {
        "id": 24643,
        "name": "Cachet de massacre de Centaures mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/FB9E624BD2234BB61092250719088015CAFF23DE\/340597.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 289,
                "buff": {
                    "skill_id": 9332,
                    "description": "Dégâts de frappe contre les Centaures +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Centaures"
        }
    },
    {
        "id": 24644,
        "name": "Cachet de massacre de Centaures majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/B0C43AA5DDA0E6AB4FB5946317D60109FF536E33\/340598.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 290,
                "buff": {
                    "skill_id": 9333,
                    "description": "Dégâts de frappe contre les Centaures +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Centaures"
        }
    },
    {
        "id": 24645,
        "name": "Cachet de massacre de Centaures supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/4DE74A04923D29D03595E42EB10FBC4F06180994\/340599.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 291,
                "buff": {
                    "skill_id": 9334,
                    "description": "Dégâts de frappe contre les Centaures +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Centaures"
        }
    },
    {
        "id": 24646,
        "name": "Cachet de massacre de Grawls mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/6606631F65BD7D99F8B7A0BE2C4B589C0B041720\/221028.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 292,
                "buff": {
                    "skill_id": 9337,
                    "description": "Dégâts de frappe contre les Grawls +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Grawls"
        }
    },
    {
        "id": 24647,
        "name": "Cachet de massacre de Grawls majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/67D8992B0A2403A95325B644A9B5666DF2E4F632\/221029.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 293,
                "buff": {
                    "skill_id": 9336,
                    "description": "Dégâts de frappe contre les Grawls +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Grawls"
        }
    },
    {
        "id": 24648,
        "name": "Cachet de massacre de Grawls supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/5D7569213FFA04AF2B16251102A7A5B1CC70BA60\/221030.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 294,
                "buff": {
                    "skill_id": 9335,
                    "description": "Dégâts de frappe contre les Grawls +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Grawls"
        }
    },
    {
        "id": 24649,
        "name": "Cachet de massacre de couvegivres mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/2C200BEC0A010A1E3A68914B58DA5D6000A7586E\/221031.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 295,
                "buff": {
                    "skill_id": 9338,
                    "description": "Dégâts de frappe contre les couvegivres +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de faiblesse"
        }
    },
    {
        "id": 24650,
        "name": "Cachet de massacre de couvegivres majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/78A6F2B1540FAB9409FDD0E60003A248CBF796F6\/221032.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 296,
                "buff": {
                    "skill_id": 9339,
                    "description": "Dégâts de frappe contre les couvegivres +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de couvegivres"
        }
    },
    {
        "id": 24651,
        "name": "Cachet de massacre de couvegivres supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/B23A080B973EB8F4090D0EFEC6745DCCE7961231\/221033.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 297,
                "buff": {
                    "skill_id": 9340,
                    "description": "Dégâts de frappe contre les couvegivres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de couvegivres"
        }
    },
    {
        "id": 24652,
        "name": "Cachet de massacre de destructeurs mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/6A5A3D0604AC1503F274313176FC6534353AF6DD\/221034.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 298,
                "buff": {
                    "skill_id": 9341,
                    "description": "Dégâts de frappe contre les destructeurs +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de destructeurs"
        }
    },
    {
        "id": 24653,
        "name": "Cachet de massacre de destructeurs majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/7EBEDE685C114C773E1AF154D749145DAC633E42\/221035.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 299,
                "buff": {
                    "skill_id": 9342,
                    "description": "Dégâts de frappe contre les destructeurs +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de destructeurs"
        }
    },
    {
        "id": 24654,
        "name": "Cachet de massacre de destructeurs supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/656ABB62BBEC39BC24D002FBE19EFCE953ABEDCD\/221036.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 300,
                "buff": {
                    "skill_id": 9343,
                    "description": "Dégâts de frappe contre les destructeurs +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de destructeurs"
        }
    },
    {
        "id": 24655,
        "name": "Cachet de massacre d'Ogres supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/D947B21C999C455E2EAF9FEDF8080197271CF7E4\/221037.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 303,
                "buff": {
                    "skill_id": 9344,
                    "description": "Dégâts de frappe contre les Ogres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'Ogres"
        }
    },
    {
        "id": 24656,
        "name": "Cachet de massacre d'Ogres majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/21DD6D7541FEAB06E890D7AD16E703B207F0690F\/221038.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 302,
                "buff": {
                    "skill_id": 9345,
                    "description": "Dégâts de frappe contre les Ogres +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'Ogres"
        }
    },
    {
        "id": 24657,
        "name": "Cachet de massacre d'Ogres mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/CE6A7BE1466F637BC4A0DD24ECC960543403FABB\/221039.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 301,
                "buff": {
                    "skill_id": 9346,
                    "description": "Dégâts de frappe contre les Ogres +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'Ogres"
        }
    },
    {
        "id": 24658,
        "name": "Cachet de massacre de serpents supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/26EEDDE25D6E60A7085610FF4097D763F1293174\/221040.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 306,
                "buff": {
                    "skill_id": 9347,
                    "description": "Dégâts de frappe contre les Kraits +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de serpents"
        }
    },
    {
        "id": 24659,
        "name": "Cachet de massacre de serpents majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/3C7471AEDC93CBC0DC2425CE476E650BC4E9E2BE\/221041.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 305,
                "buff": {
                    "skill_id": 9348,
                    "description": "Dégâts de frappe contre les Kraits +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de serpents"
        }
    },
    {
        "id": 24660,
        "name": "Cachet de massacre de serpents mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/0CC4E50B1C5BFB7021C83E9A91D70E801AA2E0A8\/221042.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 304,
                "buff": {
                    "skill_id": 9349,
                    "description": "Dégâts de frappe contre les Kraits +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de serpents"
        }
    },
    {
        "id": 24661,
        "name": "Cachet de massacre d'élémentaires supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/94535F0F7030C45F223CA41D71502B9D091D52BE\/221043.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 309,
                "buff": {
                    "skill_id": 9352,
                    "description": "Dégâts de frappe contre les élémentaires +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'élémentaires"
        }
    },
    {
        "id": 24662,
        "name": "Cachet de massacre d'élémentaires majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/505161730009613CF61AC6087D05D06A0459ED0E\/221044.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 308,
                "buff": {
                    "skill_id": 9351,
                    "description": "Dégâts de frappe contre les élémentaires +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'élémentaires"
        }
    },
    {
        "id": 24663,
        "name": "Cachet de massacre d'élémentaires mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/33654F742B6BC79709BDBE5605DCD3F2A6375E5E\/221045.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 307,
                "buff": {
                    "skill_id": 9350,
                    "description": "Dégâts de frappe contre les élémentaires +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'élémentaires"
        }
    },
    {
        "id": 24664,
        "name": "Cachet de massacre de démons supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/991BD2CC63CFE343C5E55D49F657C95E71FD0439\/340600.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 312,
                "buff": {
                    "skill_id": 9353,
                    "description": "Dégâts de frappe contre les démons, Kryptis et rejetons de Titan +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de démons"
        }
    },
    {
        "id": 24665,
        "name": "Cachet de massacre de démons majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/A52EB9F64F00B14D68CCC6CE02095CCEA19E900F\/340601.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 311,
                "buff": {
                    "skill_id": 9354,
                    "description": "Dégâts de frappe contre les démons, Kryptis et rejetons de Titan +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de démons"
        }
    },
    {
        "id": 24666,
        "name": "Cachet de massacre de démons mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/387F696CEF0CB86B56A76468C6010AF125B26852\/340602.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 310,
                "buff": {
                    "skill_id": 9355,
                    "description": "Dégâts de frappe contre les démons, Kryptis et rejetons de Titan +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de démons"
        }
    },
    {
        "id": 24667,
        "name": "Cachet du courroux supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/E66C5ADB05ED06086EE9AB03CF9830214BA02090\/340603.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 315,
                "buff": {
                    "skill_id": 9356,
                    "description": "Dégâts de frappe contre les Fils de Svanir +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "du courroux"
        }
    },
    {
        "id": 24668,
        "name": "Cachet du courroux majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/414161723B92D70AB5E7D57CAC250BB451356FBB\/340604.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 314,
                "buff": {
                    "skill_id": 9357,
                    "description": "Dégâts de frappe contre les Fils de Svanir +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "du courroux"
        }
    },
    {
        "id": 24669,
        "name": "Cachet du courroux mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/C2045219E62108B2BA18A4C5A4017A710F0FBF1E\/340605.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 313,
                "buff": {
                    "skill_id": 9358,
                    "description": "Dégâts de frappe contre les Fils de Svanir +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "du courroux"
        }
    },
    {
        "id": 24670,
        "name": "Cachet des scientifiques fous mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/65C8A50374FBA8F6A4C56505B6F60D0DCCF8B901\/340606.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 316,
                "buff": {
                    "skill_id": 9361,
                    "description": "Dégâts de frappe contre l'Enqueste +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "des scientifiques fous"
        }
    },
    {
        "id": 24671,
        "name": "Cachet des scientifiques fous majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/626B42CF37781E58C1D6F5644D767916FBDA97AB\/340607.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 317,
                "buff": {
                    "skill_id": 9360,
                    "description": "Dégâts de frappe contre l'Enqueste +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "des scientifiques fous"
        }
    },
    {
        "id": 24672,
        "name": "Cachet des scientifiques fous supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/BA4C0C33CFB4DC5707DC0E9C01190A1644085908\/340608.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 318,
                "buff": {
                    "skill_id": 9359,
                    "description": "Dégâts de frappe contre l'Enqueste +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "des scientifiques fous"
        }
    },
    {
        "id": 24673,
        "name": "Cachet d'étouffement mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/0E14131860EE6A9909FF68E5E2C9D4CD50D971D8\/340609.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 319,
                "buff": {
                    "skill_id": 9364,
                    "description": "Dégâts de frappe contre la Légion de la Flamme +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "d'étouffement"
        }
    },
    {
        "id": 24674,
        "name": "Cachet d'étouffement majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/25B9DA6E096224AA33E328057F47DF6C8070D977\/340610.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 320,
                "buff": {
                    "skill_id": 9363,
                    "description": "Dégâts de frappe contre la Légion de la Flamme +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "d'étouffement"
        }
    },
    {
        "id": 24675,
        "name": "Cachet d'étouffement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/EEA1B04CA020A9085B0ED0059A1AA17951D305CF\/340611.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 321,
                "buff": {
                    "skill_id": 9362,
                    "description": "Dégâts de frappe contre la Légion de la Flamme +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "d'étouffement"
        }
    },
    {
        "id": 24676,
        "name": "Cachet de justice mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/03401E3110BE9E1A6FCF1E7DBF547F68AF7A3F08\/340612.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 322,
                "buff": {
                    "skill_id": 9367,
                    "description": "Dégâts de frappe contre les hors-la-loi +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de justice"
        }
    },
    {
        "id": 24677,
        "name": "Cachet de justice majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/4D04F80D9CD33A0B9AE7A4ED1922AF0B0B7E4BEA\/340613.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 323,
                "buff": {
                    "skill_id": 9366,
                    "description": "Dégâts de frappe contre les hors-la-loi +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de justice"
        }
    },
    {
        "id": 24678,
        "name": "Cachet de justice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/FD156EC90AD047B00103EFD703C27563A10232A9\/340614.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 324,
                "buff": {
                    "skill_id": 9365,
                    "description": "Dégâts de frappe contre les hors-la-loi +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de justice"
        }
    },
    {
        "id": 24679,
        "name": "Cachet de rêves mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/DB20007F3635A3EC0C3152D04A944CD90A70491E\/340615.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 325,
                "buff": {
                    "skill_id": 9368,
                    "description": "Dégâts de frappe contre la Cour des Cauchemars +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de rêves"
        }
    },
    {
        "id": 24680,
        "name": "Cachet de rêves majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/B4D1482CB3C3B3A3C2321940555C61800A2CBB0A\/340616.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 326,
                "buff": {
                    "skill_id": 9369,
                    "description": "Dégâts de frappe contre la Cour des Cauchemars +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de rêves"
        }
    },
    {
        "id": 24681,
        "name": "Cachet de rêves supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/3971AF5B6948AF53F9D5A1382F66063234D43301\/340617.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 327,
                "buff": {
                    "skill_id": 9370,
                    "description": "Dégâts de frappe contre la Cour des Cauchemars +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de rêves"
        }
    },
    {
        "id": 24682,
        "name": "Cachet des lamentations mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/770FBA642FA8DD420BD91DDCFEE3E4F0C4AFE541\/340618.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 328,
                "buff": {
                    "skill_id": 9371,
                    "description": "Dégâts de frappe contre les Draguerres +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "des lamentations"
        }
    },
    {
        "id": 24683,
        "name": "Cachet des lamentations majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/C65E2D6ADA0B99050BFC0F17DB0C1CA76AE3B5E1\/340619.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 329,
                "buff": {
                    "skill_id": 9372,
                    "description": "Dégâts de frappe contre les Draguerres +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "des lamentations"
        }
    },
    {
        "id": 24684,
        "name": "Cachet des lamentations supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/7B045AB2949D75A131027B71BC01CAAE4F240D09\/340620.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 330,
                "buff": {
                    "skill_id": 9373,
                    "description": "Dégâts de frappe contre les Draguerres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "des lamentations"
        }
    },
    {
        "id": 37910,
        "name": "Cachet de massacre de karkas mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/FB9E624BD2234BB61092250719088015CAFF23DE\/340597.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 612,
                "buff": {
                    "skill_id": 15768,
                    "description": "Dégâts de frappe contre les karkas +3%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre de karkas"
        }
    },
    {
        "id": 37911,
        "name": "Cachet de massacre de karkas majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/B0C43AA5DDA0E6AB4FB5946317D60109FF536E33\/340598.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 613,
                "buff": {
                    "skill_id": 15769,
                    "description": "Dégâts de frappe contre les karkas +5%\nDégâts de frappe +2%"
                },
                "attributes": []
            },
            "suffix": "de massacre de karkas"
        }
    },
    {
        "id": 37912,
        "name": "Cachet de massacre de karkas supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/4DE74A04923D29D03595E42EB10FBC4F06180994\/340599.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 614,
                "buff": {
                    "skill_id": 15770,
                    "description": "Dégâts de frappe contre les karkas +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de karkas"
        }
    },
    {
        "id": 49457,
        "name": "Cachet d'élan supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/391000777F63F2CA05FC015E0C990AD1FEB73526\/681056.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 796,
                "buff": {
                    "skill_id": 22141,
                    "description": "Vous obtenez une charge qui augmente de +5 votre Robustesse à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'élan"
        }
    },
    {
        "id": 67340,
        "name": "Cachet de purification supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/011CEE62DABFE502E839CA19ECEAA5C523089407\/866845.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1055,
                "buff": {
                    "skill_id": 25519,
                    "description": "Supprime 3 altérations lorsque vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de purification"
        }
    },
    {
        "id": 67341,
        "name": "Cachet de cruauté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/057D6F9E40020AF09E420B09EBDB4FCD9DE37951\/866846.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1056,
                "buff": {
                    "skill_id": 25522,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Férocité à chaque ennemi tué, cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de cruauté"
        }
    },
    {
        "id": 67343,
        "name": "Cachet d'incapacité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/F79A51E6B82FEA027FD1BC606441A02309DB9EE1\/866848.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1057,
                "buff": {
                    "skill_id": 25520,
                    "description": "Inflige Infirmité à un ennemi pendant 2 secondes si vous le frappez par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'incapacité"
        }
    },
    {
        "id": 70825,
        "name": "Cachet de drain supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/C501D2CCF95A7B59F15EEDEF9C7D42C2DECE48E7\/1201533.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1103,
                "buff": {
                    "skill_id": 33022,
                    "description": "Vous drainez de la vie quand vous interrompez un ennemi.<c=@reminder>(Temps de recharge face aux ennemis rebelles : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de drain"
        }
    },
    {
        "id": 71130,
        "name": "Cachet de bestialité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/2ACE6E1BF2372CD3BEBE541666A7070BA90F5114\/1201530.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1127,
                "buff": {
                    "skill_id": 32496,
                    "description": "Vous obtenez 5 charges de Pouvoir pendant 10 secondes lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bestialité"
        }
    },
    {
        "id": 71220,
        "name": "Cachet d'agilité mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/711A3D1E05217250029D01A2B19042690BDC112E\/220995.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1112,
                "buff": {
                    "skill_id": 32216,
                    "description": "Vous obtenez Rapidité pendant 2 secondes et Célérité pendant 1 seconde si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'agilité"
        }
    },
    {
        "id": 72010,
        "name": "Cachet de concentration majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/010AF830E933C3C4D1B9912C4102D2A5FF021D91\/220987.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1096,
                "buff": {
                    "skill_id": 32206,
                    "description": "Durée d'avantage +7%"
                },
                "attributes": []
            },
            "suffix": "de concentration"
        }
    },
    {
        "id": 72092,
        "name": "Cachet d'agilité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/EBC49ABB26A3097F0A4E4C359CDD0B3804BF7D3D\/1201534.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1143,
                "buff": {
                    "skill_id": 33690,
                    "description": "Vous obtenez Rapidité pendant 5 secondes et Célérité pendant 1 seconde lorsque vous changez d'arme en combat pour équiper celle-ci. (Temps de recharge : 9 secondes)"
                },
                "attributes": []
            },
            "suffix": "d'agilité"
        }
    },
    {
        "id": 72339,
        "name": "Cachet de concentration supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/C501D2CCF95A7B59F15EEDEF9C7D42C2DECE48E7\/1201533.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1146,
                "buff": {
                    "skill_id": 33913,
                    "description": "Durée d'avantage +10%"
                },
                "attributes": []
            },
            "suffix": "de concentration"
        }
    },
    {
        "id": 72872,
        "name": "Cachet d'absorption supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/56CB34140E68F7153DD4F240D2F040D4060B06AA\/1201531.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1107,
                "buff": {
                    "skill_id": 33756,
                    "description": "Vous volez 3 avantages lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 10 secondes) (Temps de recharge face aux ennemis rebelles : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'absorption"
        }
    },
    {
        "id": 73289,
        "name": "Cachet de concentration mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/64A79CCD42D858AA7FF39A0CF1AEEC800FE1966F\/220986.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1160,
                "buff": {
                    "skill_id": 32075,
                    "description": "Durée d'avantage +4%"
                },
                "attributes": []
            },
            "suffix": "de concentration"
        }
    },
    {
        "id": 73532,
        "name": "Cachet de déchirement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/0B0BEB4BB555DB4D29019E8052ABF34CA91DB11C\/1201536.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1117,
                "buff": {
                    "skill_id": 32673,
                    "description": "Vous infligez 5 charges de Vulnérabilité pendant 10 secondes lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de déchirement"
        }
    },
    {
        "id": 74326,
        "name": "Cachet de transfert supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/7A2021FB079CE4FC3A469CAE2B6E6273000E7D45\/1201535.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1120,
                "buff": {
                    "skill_id": 32819,
                    "description": "Les soins conférés aux autres alliés sont augmentés de 10%."
                },
                "attributes": []
            },
            "suffix": "de transfert"
        }
    },
    {
        "id": 74847,
        "name": "Cachet d'agilité majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/286CB822EA9FDD683C6B114207BC0E1E6DE33743\/220996.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1100,
                "buff": {
                    "skill_id": 33324,
                    "description": "Vous obtenez Rapidité pendant 3 secondes et Célérité pendant 1 seconde si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'agilité"
        }
    },
    {
        "id": 75623,
        "name": "Cachet de transfert majeur",
        "type": "UpgradeComponent",
        "rarity": "Rare",
        "icon": "https:\/\/render.guildwars2.com\/file\/483E71CD0D524C08FF08F3BE51050806A27D6B18\/221166.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1136,
                "buff": {
                    "skill_id": 32876,
                    "description": "Les soins conférés aux autres alliés sont augmentés de 5%."
                },
                "attributes": []
            },
            "suffix": "de transfert"
        }
    },
    {
        "id": 75963,
        "name": "Cachet de transfert mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/189E0C31491DC9DAE65FBADAE2D54E7C4C329401\/221165.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1110,
                "buff": {
                    "skill_id": 33844,
                    "description": "Les soins conférés aux autres alliés sont augmentés de 3%."
                },
                "attributes": []
            },
            "suffix": "de transfert"
        }
    },
    {
        "id": 81045,
        "name": "Cachet de bonté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/9B5ADEE61292409C0102AEB9B255CEBD7B6E9EAA\/1676537.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1223,
                "buff": {
                    "skill_id": 38663,
                    "description": "Vous obtenez une charge qui augmente de +9 votre Concentration à chaque ennemi tué, ou cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bonté"
        }
    },
    {
        "id": 82876,
        "name": "Cachet de frénésie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/AE66AD152AAD72050F7E050AE2E3BBAFC6DF533F\/1766395.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1347,
                "buff": {
                    "skill_id": 41722,
                    "description": "Vous rechargez toutes les compétences équipées de 2 secondes lorsque vous tuez un ennemi. <c=@reminder>Temps de recharge : 10 secondes<\/c>"
                },
                "attributes": []
            },
            "suffix": "de frénésie"
        }
    },
    {
        "id": 84505,
        "name": "Cachet de rupture supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/396D7A5DBFA03BC49C12DAB532C4E34D342F0B51\/1766396.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1358,
                "buff": {
                    "skill_id": 42433,
                    "description": "Quand vous interrompez un ennemi, confère jusqu'à 250 en Précision et Férocité pendant 4 secondes, en fonction de votre niveau. <c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de rupture"
        }
    },
    {
        "id": 86170,
        "name": "Cachet des étoiles supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/B9B778FD561C019DC5A3A01D55C234D1E31251CE\/1894696.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1416,
                "buff": {
                    "skill_id": 47393,
                    "description": "Vous obtenez une charge qui augmente de +2 toutes vos statistiques à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi. <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c> <br><c=@reminder>(Un seul cachet à caractéristiques cumulables peut être actif à la fois.)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bonté"
        }
    },
    {
        "id": 91339,
        "name": "Cachet de massacre d'hologrammes supérieur",
        "type": "UpgradeComponent",
        "rarity": "Exotic",
        "icon": "https:\/\/render.guildwars2.com\/file\/089B2C17EDE94407C84638E05AD9589165DCA07E\/2162990.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1578,
                "buff": {
                    "skill_id": 56840,
                    "description": "Dégâts de frappe contre les hologrammes de la Foire du Dragon +17%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'hologrammes"
        }
    },
    {
        "id": 91340,
        "name": "Cachet de massacre d'hologrammes mineur",
        "type": "UpgradeComponent",
        "rarity": "Masterwork",
        "icon": "https:\/\/render.guildwars2.com\/file\/F0089D08BE2FF2CF590DEBE57A6577A6470B2D06\/2162989.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1579,
                "buff": {
                    "skill_id": 56694,
                    "description": "Dégâts de frappe contre les hologrammes de la Foire du Dragon +9%\nDégâts de frappe +1%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'hologrammes"
        }
    },
    {
        "id": 91382,
        "name": "Cachet de bienveillance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 233,
                "buff": {
                    "skill_id": 9401,
                    "description": "Vous obtenez une charge qui augmente de 0,5% les soins conférés aux autres alliés à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bienveillance"
        }
    },
    {
        "id": 91384,
        "name": "Cachet des étoiles supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1416,
                "buff": {
                    "skill_id": 47393,
                    "description": "Vous obtenez une charge qui augmente de +2 toutes vos statistiques à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi. <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c> <br><c=@reminder>(Un seul cachet à caractéristiques cumulables peut être actif à la fois.)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bonté"
        }
    },
    {
        "id": 91388,
        "name": "Cachet de démons supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 230,
                "buff": {
                    "skill_id": 9395,
                    "description": "Augmente la durée de Tourment infligé de 20%."
                },
                "attributes": []
            },
            "suffix": "d'invocation démoniaque"
        }
    },
    {
        "id": 91389,
        "name": "Cachet de la nuit supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 561,
                "buff": {
                    "skill_id": 15268,
                    "description": "Les dégâts infligés augmentent de 3%, et de 7% supplémentaires durant la nuit."
                },
                "attributes": []
            },
            "suffix": "de la nuit"
        }
    },
    {
        "id": 91390,
        "name": "Cachet de combat supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 245,
                "buff": {
                    "skill_id": 9424,
                    "description": "Vous obtenez 5 charges de Pouvoir pendant 12 secondes lorsque vous changez d'arme en combat pour équiper celle-ci. (Temps de recharge : 9 secondes)"
                },
                "attributes": []
            },
            "suffix": "de combat"
        }
    },
    {
        "id": 91393,
        "name": "Cachet de chance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 239,
                "buff": {
                    "skill_id": 9410,
                    "description": "Chance d'obtenir un avantage aléatoire à chaque ennemi tué 75%."
                },
                "attributes": []
            },
            "suffix": "de chance"
        }
    },
    {
        "id": 91398,
        "name": "Cachet de paralysie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 285,
                "buff": {
                    "skill_id": 9328,
                    "description": "Durée d'Etourdissement +30%"
                },
                "attributes": []
            },
            "suffix": "de paralysie"
        }
    },
    {
        "id": 91400,
        "name": "Cachet du renouveau supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 749,
                "buff": {
                    "skill_id": 20471,
                    "description": "Soigne les alliés à proximité lors du changement d'arme (rayon de 360°) <br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "du renouveau"
        }
    },
    {
        "id": 91403,
        "name": "Cachet d'agilité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1143,
                "buff": {
                    "skill_id": 33690,
                    "description": "Vous obtenez Rapidité pendant 5 secondes et Célérité pendant 1 seconde lorsque vous changez d'arme en combat pour équiper celle-ci. (Temps de recharge : 9 secondes)"
                },
                "attributes": []
            },
            "suffix": "d'agilité"
        }
    },
    {
        "id": 91405,
        "name": "Cachet d'impact supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 558,
                "buff": {
                    "skill_id": 9718,
                    "description": "Dégâts de frappe contre les ennemis étourdis ou renversés +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "d'impact"
        }
    },
    {
        "id": 91406,
        "name": "Cachet d'hydromancie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 248,
                "buff": {
                    "skill_id": 9430,
                    "description": "Inflige des dégâts et Givre aux ennemis à proximité pendant 2 secondes si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de l'hydromancien"
        }
    },
    {
        "id": 91407,
        "name": "Cachet de Vision supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 243,
                "buff": {
                    "skill_id": 53276,
                    "description": "Vous infligez des coups critiques à un ennemi pendant 3 secondes si vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de Vision"
        }
    },
    {
        "id": 91409,
        "name": "Cachet de vitesse supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 236,
                "buff": {
                    "skill_id": 9404,
                    "description": "Confère Rapidité pendant 20 secondes à chaque ennemi tué"
                },
                "attributes": []
            },
            "suffix": "de vitesse"
        }
    },
    {
        "id": 91412,
        "name": "Cachet de tourment supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 763,
                "buff": {
                    "skill_id": 21824,
                    "description": "En cas de coup critique, vous infligez 2 charges de Tourment pendant 5 secondes aux ennemis proches de votre cible. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de tourment"
        }
    },
    {
        "id": 91413,
        "name": "Cachet de massacre de karkas supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 614,
                "buff": {
                    "skill_id": 15770,
                    "description": "Dégâts de frappe contre les karkas +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de karkas"
        }
    },
    {
        "id": 91415,
        "name": "Cachet de restauration supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 229,
                "buff": {
                    "skill_id": 9413,
                    "description": "Vous regagnez de la santé lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de restauration"
        }
    },
    {
        "id": 91416,
        "name": "Cachet d'explosion supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 750,
                "buff": {
                    "skill_id": 20474,
                    "description": "Dégâts par altération +5%"
                },
                "attributes": []
            },
            "suffix": "d'explosion"
        }
    },
    {
        "id": 91420,
        "name": "Cachet de rage supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 204,
                "buff": {
                    "skill_id": 9295,
                    "description": "Vous bénéficiez de Célérité pendant 3 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 20 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de rage"
        }
    },
    {
        "id": 91426,
        "name": "Cachet de perception supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 224,
                "buff": {
                    "skill_id": 9382,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Précision à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de perception"
        }
    },
    {
        "id": 91429,
        "name": "Cachet de bestialité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1127,
                "buff": {
                    "skill_id": 32496,
                    "description": "Vous obtenez 5 charges de Pouvoir pendant 10 secondes lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bestialité"
        }
    },
    {
        "id": 91431,
        "name": "Cachet de massacre de démons supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 312,
                "buff": {
                    "skill_id": 9353,
                    "description": "Dégâts de frappe contre les démons, Kryptis et rejetons de Titan +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de démons"
        }
    },
    {
        "id": 91436,
        "name": "Cachet de massacre de Grawls supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 294,
                "buff": {
                    "skill_id": 9335,
                    "description": "Dégâts de frappe contre les Grawls +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Grawls"
        }
    },
    {
        "id": 91438,
        "name": "Cachet de massacre d'hologrammes supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1578,
                "buff": {
                    "skill_id": 56840,
                    "description": "Dégâts de frappe contre les hologrammes de la Foire du Dragon +17%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'hologrammes"
        }
    },
    {
        "id": 91439,
        "name": "Cachet de fermeté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 261,
                "buff": {
                    "skill_id": 9322,
                    "description": "Dégâts +5%"
                },
                "attributes": []
            },
            "suffix": "de fermeté"
        }
    },
    {
        "id": 91441,
        "name": "Cachet d'énergie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 253,
                "buff": {
                    "skill_id": 9438,
                    "description": "Régénère 50% de votre endurance si vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'énergie"
        }
    },
    {
        "id": 91443,
        "name": "Cachet de fragilité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 210,
                "buff": {
                    "skill_id": 9456,
                    "description": "Inflige 2 charges de Vulnérabilité pendant 8 secondes si vous frappez un ennemi par-derrière, par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de fragilité"
        }
    },
    {
        "id": 91448,
        "name": "Cachet de transfert supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1120,
                "buff": {
                    "skill_id": 32819,
                    "description": "Les soins conférés aux autres alliés sont augmentés de 10%."
                },
                "attributes": []
            },
            "suffix": "de transfert"
        }
    },
    {
        "id": 91452,
        "name": "Cachet de rêves supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 327,
                "buff": {
                    "skill_id": 9370,
                    "description": "Dégâts de frappe contre la Cour des Cauchemars +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de rêves"
        }
    },
    {
        "id": 91453,
        "name": "Cachet des scientifiques fous supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 318,
                "buff": {
                    "skill_id": 9359,
                    "description": "Dégâts de frappe contre l'Enqueste +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "des scientifiques fous"
        }
    },
    {
        "id": 91455,
        "name": "Cachet de massacre de fantômes supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 456,
                "buff": {
                    "skill_id": 9701,
                    "description": "Dégâts de frappe contre les fantômes +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de fantômes"
        }
    },
    {
        "id": 91456,
        "name": "Cachet de massacre de serpents supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 306,
                "buff": {
                    "skill_id": 9347,
                    "description": "Dégâts de frappe contre les Kraits +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de serpents"
        }
    },
    {
        "id": 91461,
        "name": "Cachet de frénésie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1347,
                "buff": {
                    "skill_id": 41722,
                    "description": "Vous rechargez toutes les compétences équipées de 2 secondes lorsque vous tuez un ennemi. <c=@reminder>Temps de recharge : 10 secondes<\/c>"
                },
                "attributes": []
            },
            "suffix": "de frénésie"
        }
    },
    {
        "id": 91463,
        "name": "Cachet d'incapacité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1057,
                "buff": {
                    "skill_id": 25520,
                    "description": "Inflige Infirmité à un ennemi pendant 2 secondes si vous le frappez par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'incapacité"
        }
    },
    {
        "id": 91470,
        "name": "Cachet d'endurance supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 240,
                "buff": {
                    "skill_id": 9414,
                    "description": "Votre endurance se recharge à chaque ennemi tué."
                },
                "attributes": []
            },
            "suffix": "d'endurance"
        }
    },
    {
        "id": 91473,
        "name": "Cachet de concentration supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1146,
                "buff": {
                    "skill_id": 33913,
                    "description": "Durée d'avantage +10%"
                },
                "attributes": []
            },
            "suffix": "de concentration"
        }
    },
    {
        "id": 91474,
        "name": "Cachet d'invalidation supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 215,
                "buff": {
                    "skill_id": 9290,
                    "description": "Supprime un avantage d'un ennemi si vous le frappez par le côté ou s'il est rebelle. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'invalidation"
        }
    },
    {
        "id": 91476,
        "name": "Cachet de soif de sang supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 218,
                "buff": {
                    "skill_id": 9297,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Puissance à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de soif de sang"
        }
    },
    {
        "id": 91478,
        "name": "Cachet de malice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 751,
                "buff": {
                    "skill_id": 20468,
                    "description": "Durée d'altération +10%."
                },
                "attributes": []
            },
            "suffix": "de malice"
        }
    },
    {
        "id": 91480,
        "name": "Cachet de malédiction supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 255,
                "buff": {
                    "skill_id": 9442,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, votre prochaine attaque infligera 3 charges d'Empoisonnement pendant 8 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de malédiction"
        }
    },
    {
        "id": 91486,
        "name": "Cachet de déchirement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1117,
                "buff": {
                    "skill_id": 32673,
                    "description": "Vous infligez 5 charges de Vulnérabilité pendant 10 secondes lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de déchirement"
        }
    },
    {
        "id": 91488,
        "name": "Cachet de consumation supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 270,
                "buff": {
                    "skill_id": 9314,
                    "description": "Augmente la durée des Brûlures infligées de 20%"
                },
                "attributes": []
            },
            "suffix": "de consumation"
        }
    },
    {
        "id": 91490,
        "name": "Cachet de massacre de couvegivres supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 297,
                "buff": {
                    "skill_id": 9340,
                    "description": "Dégâts de frappe contre les couvegivres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de couvegivres"
        }
    },
    {
        "id": 91492,
        "name": "Cachet de bonté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1223,
                "buff": {
                    "skill_id": 38663,
                    "description": "Vous obtenez une charge qui augmente de +9 votre Concentration à chaque ennemi tué, ou cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de bonté"
        }
    },
    {
        "id": 91496,
        "name": "Cachet de corruption supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 221,
                "buff": {
                    "skill_id": 9377,
                    "description": "Vous obtenez une charge qui augmente de +10 vos Dégâts par altération à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de corruption"
        }
    },
    {
        "id": 91499,
        "name": "Cachet de rupture supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1358,
                "buff": {
                    "skill_id": 42433,
                    "description": "Quand vous interrompez un ennemi, confère jusqu'à 250 en Précision et Férocité pendant 4 secondes, en fonction de votre niveau. <c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de rupture"
        }
    },
    {
        "id": 91500,
        "name": "Cachet de péril supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 267,
                "buff": {
                    "skill_id": 9318,
                    "description": "Augmente de 20% la durée des Vulnérabilités infligées"
                },
                "attributes": []
            },
            "suffix": "de péril"
        }
    },
    {
        "id": 91502,
        "name": "Cachet de vie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 227,
                "buff": {
                    "skill_id": 9389,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Guérison à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de vie"
        }
    },
    {
        "id": 91505,
        "name": "Cachet légendaire",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 112,
                "attributes": []
            },
            "suffix": ""
        }
    },
    {
        "id": 91506,
        "name": "Cachet de massacre d'Ogres supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 303,
                "buff": {
                    "skill_id": 9344,
                    "description": "Dégâts de frappe contre les Ogres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'Ogres"
        }
    },
    {
        "id": 91509,
        "name": "Cachet de pureté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 214,
                "buff": {
                    "skill_id": 9289,
                    "description": "Supprime une altération si vous frappez un ennemi par le côté ou s'il est rebelle. <br><c=@reminder>(Temps de recharge : 4 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de pureté"
        }
    },
    {
        "id": 91511,
        "name": "Cachet de boitement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 273,
                "buff": {
                    "skill_id": 9316,
                    "description": "Augmente de 20% la durée des Infirmités infligées"
                },
                "attributes": []
            },
            "suffix": "de boitement"
        }
    },
    {
        "id": 91519,
        "name": "Cachet de massacre de Centaures supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 291,
                "buff": {
                    "skill_id": 9334,
                    "description": "Dégâts de frappe contre les Centaures +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de Centaures"
        }
    },
    {
        "id": 91520,
        "name": "Cachet d'air supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 197,
                "buff": {
                    "skill_id": 9448,
                    "description": "Vous déclenchez un éclair foudroyant lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'air"
        }
    },
    {
        "id": 91521,
        "name": "Cachet d'élan supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 796,
                "buff": {
                    "skill_id": 22141,
                    "description": "Vous obtenez une charge qui augmente de +5 votre Robustesse à chaque ennemi tué, et cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'élan"
        }
    },
    {
        "id": 91524,
        "name": "Cachet de massacre de morts-vivants supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 288,
                "buff": {
                    "skill_id": 9331,
                    "description": "Dégâts de frappe contre les morts-vivants +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de morts-vivants"
        }
    },
    {
        "id": 91526,
        "name": "Cachet des lamentations supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 330,
                "buff": {
                    "skill_id": 9373,
                    "description": "Dégâts de frappe contre les Draguerres +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "des lamentations"
        }
    },
    {
        "id": 91527,
        "name": "Cachet du courroux supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 315,
                "buff": {
                    "skill_id": 9356,
                    "description": "Dégâts de frappe contre les Fils de Svanir +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "du courroux"
        }
    },
    {
        "id": 91531,
        "name": "Cachet de terre supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 203,
                "buff": {
                    "skill_id": 9452,
                    "description": "Vous infligez Saignement pendant 6 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 2 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de terre"
        }
    },
    {
        "id": 91532,
        "name": "Cachet de venin supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 279,
                "buff": {
                    "skill_id": 9317,
                    "description": "Augmente de 20% la durée des Empoisonnements infligés"
                },
                "attributes": []
            },
            "suffix": "de venin"
        }
    },
    {
        "id": 91534,
        "name": "Cachet d'agonie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 258,
                "buff": {
                    "skill_id": 9313,
                    "description": "Augmente de 20% la durée des Saignements infligés"
                },
                "attributes": []
            },
            "suffix": "d'agonie"
        }
    },
    {
        "id": 91535,
        "name": "Cachet de glace supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 200,
                "buff": {
                    "skill_id": 9450,
                    "description": "Inflige Givre à un ennemi pendant 2 secondes si vous le frappez par le côté ou s'il est rebelle. <c=@reminder>(Temps de recharge : 10 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de glace"
        }
    },
    {
        "id": 91537,
        "name": "Cachet de massacre d'élémentaires supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 309,
                "buff": {
                    "skill_id": 9352,
                    "description": "Dégâts de frappe contre les élémentaires +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre d'élémentaires"
        }
    },
    {
        "id": 91539,
        "name": "Cachet de massacre de destructeurs supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 300,
                "buff": {
                    "skill_id": 9343,
                    "description": "Dégâts de frappe contre les destructeurs +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de massacre de destructeurs"
        }
    },
    {
        "id": 91542,
        "name": "Cachet du vice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1068,
                "buff": {
                    "skill_id": 25875,
                    "description": "Applique 2 charges d'Empoisonnement pendant 4 secondes aux ennemis à proximité lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 8 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du vice"
        }
    },
    {
        "id": 91543,
        "name": "Cachet d'espièglerie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1072,
                "buff": {
                    "skill_id": 26274,
                    "description": "Lance jusqu'à 4 boules de neige sur les ennemis devant vous et leur inflige Aveuglement si vous changez d'arme en combat pour équiper celle-ci.<br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'espièglerie"
        }
    },
    {
        "id": 91544,
        "name": "Cachet de drain supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1103,
                "buff": {
                    "skill_id": 33022,
                    "description": "Vous drainez de la vie quand vous interrompez un ennemi.<c=@reminder>(Temps de recharge face aux ennemis rebelles : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de drain"
        }
    },
    {
        "id": 91546,
        "name": "Cachet de célérité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1019,
                "buff": {
                    "skill_id": 24208,
                    "description": "Vous bénéficiez de Célérité pendant 5 secondes si vous neutralisez un ennemi. (Temps de recharge : 20 secondes)"
                },
                "attributes": []
            },
            "suffix": "de célérité"
        }
    },
    {
        "id": 91548,
        "name": "Cachet de purification supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1055,
                "buff": {
                    "skill_id": 25519,
                    "description": "Supprime 3 altérations lorsque vous changez d'arme en combat pour équiper celle-ci. <c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de purification"
        }
    },
    {
        "id": 91552,
        "name": "Cachet de géomancie supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 251,
                "buff": {
                    "skill_id": 9436,
                    "description": "Si vous changez d'arme en combat pour équiper celle-ci, la prochaine attaque infligera Saignement aux ennemis à proximité pendant 8 secondes. <br><c=@reminder>(Temps de recharge : 9 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "du géomancien"
        }
    },
    {
        "id": 91558,
        "name": "Cachet de générosité supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 635,
                "buff": {
                    "skill_id": 16509,
                    "description": "Transfère une altération à un ennemi en cas de coup critique. <br><c=@reminder>(Temps de recharge : 6 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de générosité"
        }
    },
    {
        "id": 91559,
        "name": "Cachet de feu supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 189,
                "buff": {
                    "skill_id": 9444,
                    "description": "Déclenche une Explosion de flammes dans un rayon de 240 lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de feu"
        }
    },
    {
        "id": 91561,
        "name": "Cachet de force supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 207,
                "buff": {
                    "skill_id": 9454,
                    "description": "Vous bénéficiez de Pouvoir pendant 10 secondes lorsque vous infligez un coup critique à un ennemi. <br><c=@reminder>(Temps de recharge : 1 seconde)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de force"
        }
    },
    {
        "id": 91575,
        "name": "Cachet de faiblesse supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 282,
                "buff": {
                    "skill_id": 9319,
                    "description": "Augmente de 20% la durée des Faiblesses infligées"
                },
                "attributes": []
            },
            "suffix": "de faiblesse"
        }
    },
    {
        "id": 91577,
        "name": "Cachet de sangsue supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 242,
                "buff": {
                    "skill_id": 9420,
                    "description": "Votre prochaine attaque volera de la santé si vous changez d'arme en combat pour équiper celle-ci<br><c=@reminder>(Temps de recharge : 9 secondes).<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sangsue"
        }
    },
    {
        "id": 91584,
        "name": "Cachet de frisson supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 276,
                "buff": {
                    "skill_id": 9315,
                    "description": "Augmente la durée de Givre infligé de 20%"
                },
                "attributes": []
            },
            "suffix": "de frisson"
        }
    },
    {
        "id": 91589,
        "name": "Cachet d'absorption supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1107,
                "buff": {
                    "skill_id": 33756,
                    "description": "Vous volez 3 avantages lorsque vous interrompez un ennemi. <c=@reminder>(Temps de recharge : 10 secondes) (Temps de recharge face aux ennemis rebelles : 3 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'absorption"
        }
    },
    {
        "id": 91594,
        "name": "Cachet d'eau supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 194,
                "buff": {
                    "skill_id": 9446,
                    "description": "Soigne vos alliés dans un rayon de 360 autour de la cible lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "d'eau"
        }
    },
    {
        "id": 91600,
        "name": "Cachet de justice supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 324,
                "buff": {
                    "skill_id": 9365,
                    "description": "Dégâts de frappe contre les hors-la-loi +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "de justice"
        }
    },
    {
        "id": 91603,
        "name": "Cachet de cruauté supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 1056,
                "buff": {
                    "skill_id": 25522,
                    "description": "Vous obtenez une charge qui augmente de +10 votre Férocité à chaque ennemi tué, cinq charges si vous tuez un joueur ennemi <c=@reminder>(25 charges maximum, effet annulé lorsque vous êtes à terre).<\/c><br><c=@reminder>(Un seul cachet à capacité cumulable peut être actif à la fois)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de cruauté"
        }
    },
    {
        "id": 91604,
        "name": "Cachet de sang supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 213,
                "buff": {
                    "skill_id": 9458,
                    "description": "Vole la santé d'un ennemi lorsque vous infligez un coup critique. <br><c=@reminder>(Temps de recharge : 5 secondes)<\/c>"
                },
                "attributes": []
            },
            "suffix": "de sang"
        }
    },
    {
        "id": 91607,
        "name": "Cachet d'exactitude supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 264,
                "buff": {
                    "skill_id": 9325,
                    "description": "Chance de coup critique +7%"
                },
                "attributes": []
            },
            "suffix": "d'exactitude"
        }
    },
    {
        "id": 91609,
        "name": "Cachet d'étouffement supérieur",
        "type": "UpgradeComponent",
        "rarity": "Legendary",
        "icon": "https:\/\/render.guildwars2.com\/file\/2DDB0E173860AD433DF6D8AF412FDAFB9BCC4FB9\/2179569.png",
        "details": {
            "type": "Sigil",
            "flags": [
                "ShortBow",
                "Dagger",
                "Focus",
                "Greatsword",
                "Hammer",
                "Harpoon",
                "Mace",
                "Pistol",
                "Rifle",
                "Scepter",
                "Shield",
                "Speargun",
                "Axe",
                "Staff",
                "Sword",
                "Torch",
                "Trident",
                "Warhorn",
                "LongBow"
            ],
            "infusion_upgrade_flags": [],
            "attribute_adjustment": 0,
            "infix_upgrade": {
                "id": 321,
                "buff": {
                    "skill_id": 9362,
                    "description": "Dégâts de frappe contre la Légion de la Flamme +7%\nDégâts de frappe +3%"
                },
                "attributes": []
            },
            "suffix": "d'étouffement"
        }
    }
];

export const GW2_STATS_SIGILS: GW2SigilOption[] = (() => {
  const seen = new Set<string>();
  const deduped = GW2_SIGILS
    .filter((relic) => {
      if (!relic || !relic.name)
        return false;
      if (relic.name.includes('légendaire'))
        return false;

      const key = norm(relic.name);
      if (seen.has(key))
        return false;

      seen.add(key);
      return true;
    })
    .map((relic) => ({
      value: relic.id,
      label: relic.name.replace('Cachet ', ''),
    }));

  deduped.sort((a, b) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' }) || a.value - b.value);
  return deduped;
})();
