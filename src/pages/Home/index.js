import React from 'react';
import {
  Card,
  ContainerBlock,
  GraficoGrande,
  ContainerFlex,
  GraficoPequeno,
  ContainerGraficoPequeno,
} from './styled';

export default function Home() {
  return (
    <>
      <ContainerBlock>
        <ContainerFlex>
          <Card>Card de Aviso</Card>
          <Card>Card de Aviso</Card>
          <Card>Card de Aviso</Card>
        </ContainerFlex>
        <GraficoGrande>Grafico Grande</GraficoGrande>
      </ContainerBlock>
      <ContainerGraficoPequeno>
        <ContainerBlock>
          <GraficoPequeno>Grafico Pequeno</GraficoPequeno>
          <GraficoPequeno>Grafico Pequeno</GraficoPequeno>
          <GraficoPequeno>Grafico Pequeno</GraficoPequeno>
        </ContainerBlock>
      </ContainerGraficoPequeno>
    </>
  );
}
