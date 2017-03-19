import React from 'react';

import Title from 'grommet/components/Title';
import Label from 'grommet/components/Label';

// anchor and icons
import Anchor from 'grommet/components/Anchor';
import LinkIcon from 'grommet/components/icons/base/Link';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import PlatformGoogleIcon from 'grommet/components/icons/base/PlatformGoogle';
import SocialYoutubeIcon from 'grommet/components/icons/base/SocialYoutube';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';


const RepBio = ({ bio, google }) => {

  console.log('repbio: ', bio, google);
  // static info is available via props.rep
  const { party } = google;
  const { title } = bio.roles[0];
  const { facebook_account, facebook_id, twitter_account,
          youtube_account, url, google_entity_id } = bio;

  const { first_name, middle_name, last_name } = bio;
  const first = `${first_name} ${middle_name}`;

  return (
    <div className="rep-bio">
      <img src={google.photoUrl} alt={bio.name} style={{maxHeight:"400px"}} />
      <Title>{ party }</Title>
      <Title>{ title }</Title>
      <h3>{ first }</h3>
      <h1>{ last_name }</h1>
      { url ? (
        <Anchor icon={<LinkIcon />}
          label={`${url.replace(/https:\/\/www./g, '')}`}
          target={'_blank'}
          animateIcon={true}
          size={'large'}
          href={`${url}`}
        />
      ) : (
        <div />
      )}
      <br />
      { facebook_account ? (
        <Anchor icon={<SocialFacebookIcon />}
          label={facebook_account}
          animateIcon={true}
          target={'_blank'}
          size={'large'}
          href={`http://www.facebook.com/${facebook_id}`}
        />
      ) : (
        <div />
      )}
      <br />
      { twitter_account ? (
        <Anchor icon={<SocialTwitterIcon />}
          label={twitter_account}
          target={'_blank'}
          animateIcon={true}
          size={'large'}
          href={`http://www.twitter.com/${twitter_account}`}
        />
      ) : (
        <div />
      )}
      <br />
      { youtube_account ? (
        <Anchor icon={<SocialYoutubeIcon />}
          label={youtube_account}
          target={'_blank'}
          animateIcon={true}
          size={'large'}
          href={`http://www.youtube.com/${youtube_account}`}
        />
      ) : (
        <br />
      )}
    </div>
  );
};

export default RepBio;
