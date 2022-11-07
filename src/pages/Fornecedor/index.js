import React from 'react';
import {
  ContainerFornecedor,
  ContainerImage,
  ContainerBlock,
  Tag,
  ContainerFlex,
  ContainerOutros,
  ContainerInformacoes,
  Comentarios,
  ContainerComentario,
} from './styled';

export default function Fornecedor() {
  return (
    <ContainerFornecedor>
      <ContainerBlock>
        <h2>Avaliação do Fornecedor</h2>
        <ContainerFlex>
          <ContainerImage>Nagem</ContainerImage>
          <ContainerBlock>
            <ContainerOutros>Outros</ContainerOutros>
            <ContainerFlex>
              <Tag>Eletrônicos</Tag>
              <Tag>Material Escolar</Tag>
              <Tag>Legal</Tag>
            </ContainerFlex>
          </ContainerBlock>
        </ContainerFlex>
        <ContainerInformacoes>Informações do Produto</ContainerInformacoes>
        <Comentarios>
          <hr />
          <h3>Comentários do Produto</h3>
          <ContainerComentario>
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for lorem
            ipsum will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </ContainerComentario>
        </Comentarios>
      </ContainerBlock>
    </ContainerFornecedor>
  );
}
