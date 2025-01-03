import { FiFileText } from "react-icons/fi";
import { LuUsers2, LuLogOut } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { GrChat } from "react-icons/gr";
import { PackageIcon, PressKitIcon, RequestIcon } from "@/components/Icons";
import { IoGridOutline } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";

export const navs = [
	{ title: "Dashboard", icon: IoGridOutline, route: "/dashboard" },
	{ title: "Learn", icon: RequestIcon, route: "/dashboard/learn" },
	{
		title: "Leaderboard",
		icon: MdLeaderboard,
		route: "/dashboard/leaderboard",
	},
];
