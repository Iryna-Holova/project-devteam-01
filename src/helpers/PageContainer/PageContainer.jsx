import { useLocation } from "react-router-dom";
import { Box, MainContainer, RotateBlock } from "./PageContainer.styled";

import { useMediaQuery } from "@mui/material";

const PageContainer = ({ children }) => {
  const { pathname } = useLocation();

  const isRenderBlocks =
    pathname.includes("main") || pathname.includes("recipe");

  const adaptive = {
    width: 6,
    height: 6,
    top: 142,
    left: 150,
  };

  const phone = {
    width: 6,
    height: 6,
    top: 142,
    left: 247,
  };

  const tablet = {
    width: 12,
    height: 12,
    top: 155,
    left: 437,
  };

  const desktop = {
    width: 12,
    height: 12,
    top: 135,
    left: 807,
  };

  const large = {
    left: 1000,
  };

  const adaptiveTwo = {
    top: 109,
    left: 250,
  };

  const phoneTwo = {
    top: 109,
    left: 349,
  };
  const tabletTwo = {
    top: 98,
    left: 726,
  };
  const desktopTwo = {
    top: 65,
    left: 1250,
  };
  const largeTwo = {
    left: 1450,
  };
  const matchesAdaptive = useMediaQuery("(max-width: 340px)");
  const matchesMobile = useMediaQuery(
    "(min-width: 340px) and (max-width: 767.98px)"
  );
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1439.9px)");

  const props = matchesAdaptive
    ? adaptive
    : matchesMobile
    ? phone
    : matchesTablet
    ? tablet
    : matchesDesktop
    ? desktop
    : large;
  const propsTwo = matchesAdaptive
    ? adaptiveTwo
    : matchesMobile
    ? phoneTwo
    : matchesTablet
    ? tabletTwo
    : matchesDesktop
    ? desktopTwo
    : largeTwo;

  return (
    <MainContainer as="main">
      {!isRenderBlocks && (
        <Box>
          <RotateBlock />
          <RotateBlock
            {...props}
            background={(p) => p.theme.colors.containerBlockIcon}
          />
          <RotateBlock {...propsTwo} />
        </Box>
      )}
      {children}
    </MainContainer>
  );
};

export default PageContainer;