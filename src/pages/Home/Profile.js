import { Fragment } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import Link from 'components/Link'
import { Button } from 'components/Button'
import DecoderText from 'components/DecoderText'
import Divider from 'components/Divider'
import Image from 'components/Image'
import Section from 'components/Section'
import ProfileImg from '../../assets/main-profile.png'
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg'
import { reflow } from 'utils/transition'
import { media } from 'utils/style'
import { ReactComponent as KatakanaProfile } from 'assets/katakana-profile.svg'
import Heading from 'components/Heading'
import Text from 'components/Text'
import './Profile.css'

const ProfileText = ({ status, titleId }) => (
    <Fragment>
        <Heading
            className={classNames('profile__title', `profile__title--${status}`)}
            level={3}
            id={titleId}
        >
            <DecoderText text="About me" start={status !== 'exited'} delay={500} />
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            I'm a software engineering undergraduate with a passion for developing
            innovative mobile and web applications. My passion for software development
            started from a young age, and since then, I enjoy working on both mobile and
            web applications, and I have experience in developing web applications using
            React, Angular, Node.js, Next.js, MongoDB, SQL, and three.js. Additionally, I
            have developed native iOS mobile applications and have experience with ARKit
            and CoreML in iOS. My love for software engineering drives me to continually
            improve and develop innovative solutions to real-world problems.
        </Text>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            Feel free to reach out to me.
        </Text>
    </Fragment>
)

const Profile = ({ id, visible, sectionRef }) => {
    const titleId = `${id}-title`

    return (
        <Section
            className="profile"
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible} timeout={0} onEnter={reflow}>
                {status => (
                    <div className="profile__content">
                        <div className="profile__column">
                            <ProfileText status={status} titleId={titleId} />
                            {/* <Button
                                secondary
                                className={classNames(
                                    'profile__button',
                                    `profile__button--${status}`
                                )}
                                href="/contact"
                                icon="send"
                            >
                                Contact me
                            </Button> */}
                        </div>
                        <div className="profile__column">
                            <div className="profile__tag" aria-hidden>
                                <Divider
                                    notchWidth="64px"
                                    notchHeight="8px"
                                    collapsed={status !== 'entered'}
                                    collapseDelay={1000}
                                />
                                <div
                                    className={classNames(
                                        'profile__tag-text',
                                        `profile__tag-text--${status}`
                                    )}
                                >
                                    Me
                                </div>
                            </div>
                            <div className="profile__image-wrapper">
                                <Image
                                    reveal
                                    delay={100}
                                    placeholder={ProfileImg}
                                    srcSet={`${ProfileImg} 500w, ${ProfileImg} 1000w`}
                                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                                    alt="Profile"
                                />
                                {/* <KatakanaProfile
                                    className={classNames(
                                        'profile__svg',
                                        `profile__svg--${status}`
                                    )}
                                /> */}
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </Section>
    )
}

export default Profile
