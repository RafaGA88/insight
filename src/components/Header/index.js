import React from 'react';
import { MdCircleNotifications } from 'react-icons/md';
import { BsCalendar } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { ContainerHeader, ContainerSimbols, ContainerFlex } from './styled';

export default function Header() {
  return (
    <ContainerFlex>
      <ContainerHeader>
        <h1>Insights</h1>
      </ContainerHeader>
      <ContainerFlex>
        <ContainerSimbols>
          <BsCalendar />
        </ContainerSimbols>
        <ContainerSimbols>
          <MdCircleNotifications />
        </ContainerSimbols>
        <ContainerSimbols>
          <FaUserCircle />
        </ContainerSimbols>
      </ContainerFlex>
    </ContainerFlex>
  );
}
