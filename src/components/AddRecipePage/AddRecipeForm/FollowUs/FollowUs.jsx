// import {ReactComponent as Facebook} from '../../../../assets/svg/FollowUsIcons/facebook.svg';
// import { ReactComponent as Youtube } from '../../../../assets/svg/FollowUsIcons/youTube.svg';
// import { ReactComponent as Twitter }from '../../../../assets/svg/FollowUsIcons/twiter.svg';
// import { ReactComponent as Instagram } from '../../../../assets/svg/FollowUsIcons/instagram.svg';
import { StyledFollowUsBlock, SocialMediaList, Link } from "./FollowUs.styled";
import { SubTitleStyled } from '../RecipePreparation/RecipePreparation.styled';
const FollowUs = () => {
    return (
        <StyledFollowUsBlock className='container'>
              <SubTitleStyled>Follow us</SubTitleStyled>
        <div>
            <SocialMediaList>
                         <Link href="https://www.facebook.com/" >
                        {/* <Facebook width="26" height="26"/> */}
                    </Link>

               
                    <Link href="https://www.youtube.com/">
                            {/* <Youtube width="28" height="22"/> */}
                    </Link>
              
                    <Link href="https://www.twitter.com/">
                            {/* <Twitter width="25" height="22"/> */}
                    </Link>
               
                
                    <Link href="https://www.instagram.com/">
                            {/* <Instagram width="24" height="24"/> */}
                    </Link>
              
            </SocialMediaList>
        </div>  </StyledFollowUsBlock>
    )
};
export default FollowUs;