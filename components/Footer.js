import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton, useColorMode } from '@chakra-ui/react'
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi"

export const Footer = () => {

    const { colorMode } = useColorMode()
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    }
    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    }
    return (
        <Flex align="center" mb={4} direction="column" visibility={'hidden', 'visible', 'visible'} display={['none', 'flex', 'flex']}>
            <div>
                <Link href="https://twitter.com" title="Twitter" isExternal>
                    <IconButton
                        aria-label="Twitter"
                        icon={<FiTwitter />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="https://github.com/abdulolagunju19" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com"
                    title="LinkedIn"
                    isExternal
                >
                    <IconButton
                        aria-label="LinkedIn"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link
                    href="https://www.youtube.com"
                    title="YouTube"
                    isExternal
                >
                    <IconButton
                        aria-label="YouTube"
                        icon={<FiYoutube />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
                <Link href="mailto:abdulolagunju19@gmail.com" title="Email" isExternal>
                    <IconButton
                        aria-label="Email"
                        icon={<FiMail />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                    />
                </Link>
            </div>
            <div>
                <NextLink href="/blog" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Blog"
                    >
                        /hello
                    </Link>
                </NextLink>
                <NextLink href="/simplestats" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Simplistic Statistics"
                    >
                        /videos
                    </Link>
                </NextLink>
                <NextLink href="/contactme" passHref>
                    <Link
                        fontSize="md"
                        color="gray.500"
                        minWidth="100px"
                        mr={2}
                        title="Contact Me"
                    >
                        /videos
                    </Link>
                </NextLink>
            </div>
        </Flex>
    )
}
