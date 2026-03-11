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

/* RELICS */
import rawRelics from '../data/relics.json';
export interface GW2Relic {
    id: number,
    name: string,
    type: string,
    rarity: string,
    icon: string,
    details: any
};

export const GW2_RELICS: GW2Relic[] = rawRelics;
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

/* RUNES */
import rawRunes from '../data/runes.json';
export interface GW2Rune {
    id: number,
    name: string,
    type: string,
    rarity: string,
    icon: string,
    details: any
};

export const GW2_RUNES: GW2Rune[] = rawRunes;
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

/* SIGILS */
import rawSigils from '../data/sigils.json';
export interface GW2Sigil {
    id: number,
    name: string,
    type: string,
    rarity: string,
    icon: string,
    details: any
}

export const GW2_SIGILS: GW2Sigil[] = rawSigils;
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

/* SPECS */
import rawSpecs from '../data/specs.json';
export interface GW2Spec {
    id: number,
    name: string,
    profession: string,
    elite: boolean,
    minor_traits: number[],
    major_traits: number[],
    icon: string,
    background: string,
    profession_icon_bg?: string,
    profession_icon?: string
}

export const GW2_SPECIALIZATIONS = rawSpecs as GW2Spec[];
export const GW2_SPECIALIZATIONS_ELITES = GW2_SPECIALIZATIONS.filter(sp => sp.elite);
export function getGW2Spec(specID: number)
{
    const specs = GW2_SPECIALIZATIONS.filter(sp => sp.id == specID);
    if (specs.length > 0)
        return specs[0];
    return undefined;
}
export function isSpecElite(specID: number)
{
    return GW2_SPECIALIZATIONS_ELITES.filter(sp => sp.id == specID).length > 0;
}
