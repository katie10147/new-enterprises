// Assets
import burger from "assets/img/food/burger.png";
import chicken from "assets/img/food/chicken.png";
import chilli from "assets/img/food/chilli.png";
import potato from "assets/img/food/potato.png";
import salmon from "assets/img/food/salmon.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";

import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: chicken,
    name: "Easy Chicken Parm",
    email: "20 minutes",
    subdomain: "Manager",
    domain: "Organization",
    status: "Offline",
    date: "02/13/23",
    day: "Monday",
    cost: "$5.21"
  }, 
  {
    logo: chilli,
    name: "Turkey Chilli",
    email: "1 hour 20 minutes",
    subdomain: "Manager",
    domain: "Organization",
    status: "Offline",
    date: "02/14/23",
    day: "Tuesday",
    cost: "$4.52"
  }, 
  {
    logo: salmon,
    name: "Maple Salmon",
    email: "30 minutes",
    subdomain: "Manager",
    domain: "Organization",
    status: "Offline",
    date: "02/15/23",
    day: "Wednesday",
    cost: "$6.25"
  }, 
  {
    logo: potato,
    name: "German Potato Pancakes",
    email: "35 minutes",
    subdomain: "Manager",
    domain: "Organization",
    status: "Offline",
    date: "02/16/23",
    day: "Thursday",
    cost: "$4.20"
  }, 
  {
    logo: burger,
    name: "Black Bean Veggie Burgers",
    email: "50 minutes",
    subdomain: "Manager",
    domain: "Organization",
    status: "Offline",
    date: "02/17/23",
    day: "Friday",
    cost: "$3.50"
  }, 
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
