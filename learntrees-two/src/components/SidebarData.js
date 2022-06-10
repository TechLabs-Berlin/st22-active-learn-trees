import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  
      
  {
    title: "Berlin",
    path: "/berlin",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Mitte",
        path: "/berlin/mitte",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "CharlottenburgWilmersdorf",
        path: "/berlin/charlottenburgWilmersdorf",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "Spandau",
        path: "/berlin/spandau",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "Pankow",
        path: "/berlin/pankow",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "Reinickendorf",
        path: "/berlin/reinickendorf",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "Lichtenberg",
        path: "/berlin/lichtenberg",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "MarzahnHellersdorf",
        path: "/berlin/marzahnHellersdorf",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "FriedrichshainKreuzberg",
        path: "/berlin/friedrichshainKreuzberg",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "TempelhofSchöneberg",
        path: "/berlin/tempelhofSchöneberg",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "TreptowKöpenick",
        path: "/berlin/treptowKöpenick",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "Neukölln",
        path: "/berlin/neukölln",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: "SteglitzZehlendorf",
        path: "/berlin/spandau",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
    ],
  },
  
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Message 1",
        path: "/messages/Message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/Message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
      title: 'Support',
      path: '/support',
      icon: <IoIcons.IoMdHelpCircle />
  }
];
