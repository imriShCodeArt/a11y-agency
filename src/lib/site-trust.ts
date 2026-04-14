/**
 * Default trust / proof copy for marketing sections (Issue #13).
 */

export type TrustProofListItem = {
  id: string;
  text: string;
};

export type TrustProofBlock = {
  id: string;
  title: string;
  items: readonly TrustProofListItem[];
};

export type TrustProofContent = {
  sectionTitle: string;
  intro: string;
  blocks: readonly TrustProofBlock[];
  closing?: string;
};

const TRUST_PLATFORM_ITEMS: readonly TrustProofListItem[] = [
  {
    id: "react-next",
    text: "אתרים ואפליקציות ב־React / Next.js ומערכות דומות",
  },
  { id: "cms", text: "מערכות ניהול תוכן ואתרי שיווק קלאסיים" },
  {
    id: "design",
    text: "שיתוף עם עיצוב ו־UX כדי לסגור פערים בצורה ריאלית",
  },
];

const TRUST_FINDING_ITEMS: readonly TrustProofListItem[] = [
  { id: "keyboard", text: "ניווט מקלדת, מיקוד גלוי, לכידות מקשים" },
  { id: "perceivable", text: "ניגודיות, טקסט חלופי, סדר קריאה הגיוני" },
  { id: "forms", text: "טפסים, הודעות שגיאה, תיוגים לקוראי מסך" },
  {
    id: "dynamic",
    text: "רכיבים דינמיים, מודלים, עדכוני תוכן בלי לאבד הקשר",
  },
];

export const SITE_TRUST_HOME: TrustProofContent = {
  sectionTitle: "אמון ומקצועיות",
  intro:
    "אנחנו עובדים בשפה של מוצר ופיתוח — לא רק צ׳ק־ליסטים. המטרה: שתדעו מה באמת משפיע על משתמשים, מה דחוף לתקן, ואיך לשמור על נגישות אחרי כל שינוי.",
  blocks: [
    {
      id: "platforms",
      title: "מוכרים את הסביבות שבהן אתם בונים",
      items: TRUST_PLATFORM_ITEMS,
    },
    {
      id: "findings",
      title: "דוגמאות לסוגי ממצאים שנבדקים",
      items: TRUST_FINDING_ITEMS,
    },
  ],
  closing:
    "הדוחות וההמלצות נשארים ברורים גם למי שאינו מומחה נגישות — כדי שאפשר יהיה לקבל החלטות ולתעדף ביחד.",
};

export const SITE_TRUST_ABOUT: TrustProofContent = {
  sectionTitle: "איך בונים אמון בעבודה",
  intro:
    "שקיפות על מה נבדק, למה זה חשוב, ומה המחיר של דחייה — בלי היסטריה ובלי מילים מעורפלות.",
  blocks: [
    {
      id: "platforms-about",
      title: "מוכרים את הסביבות שבהן אתם בונים",
      items: TRUST_PLATFORM_ITEMS,
    },
    {
      id: "findings-about",
      title: "דוגמאות לסוגי ממצאים שנבדקים",
      items: TRUST_FINDING_ITEMS,
    },
  ],
  closing:
    "מדברים עם צוותי מוצר ופיתוח בשפה משותפת, ומתאימים את עומק הבדיקה לשלב שבו הארגון נמצא.",
};
