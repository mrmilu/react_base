import type { SimpleCardProps } from "@/src/ui/components/simple_card/simple_card";
import { shadows } from "@/src/ui/styles/shadows";
import { spacing } from "@/src/ui/styles/spacing";
import { typography } from "@/src/ui/styles/typography.css";
import { px2rem } from "@/src/ui/styles/utils.css";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Wrapper = styled.div<{ onClick: SimpleCardProps["onClick"] }>`
  display: flex;
  min-width: 0;
  align-items: center;
  padding: ${px2rem(spacing.size4)};
  background-color: ${colors.white};
  box-shadow: ${shadows.one};
  border-radius: ${px2rem(8)};
  cursor: ${(props) => props.onClick && "pointer"};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${px2rem(spacing.size1)};
  margin-left: ${px2rem(spacing.size4)};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  > h4 {
    ${typography.bodyL};
  }
`;

const Avatar = styled.div`
  width: ${px2rem(65)};
  height: ${px2rem(65)};
  border-radius: 100%;
  flex: 0 0 auto;
  background-color: ${colors.gray30};
`;

const SimpleCardStyled = {
  Wrapper,
  Content,
  Avatar
};

export default SimpleCardStyled;
