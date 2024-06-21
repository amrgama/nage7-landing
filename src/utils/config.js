import { FaTwitter, FaLinkedinIn, FaPinterest, FaFacebookF, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navbarConfig = [
    {
        label: "home",
        target: "home"
    },
    {
        label: "about",
        target: "home",
        disabled: true,
    },
    {
        label: "services",
        target: "home",
        disabled: true,
    },
    {
        label: "deleteAccount.title",
        target: "delete-account"
    },
]

export const footerConfig = {
    quickLinks: {
        title: "footer.quickLinks",
        links: [
            {
                label: "home",
                target: "#home"
            },
            {
                label: "about",
                target: "#home",
                disabled: true,
            },
            {
                label: "services",
                target: "#home",
                disabled: true,
            },
            {
                label: "deleteAccount.title",
                target: "#delete-account"
            },
            // {
            //     label: "pricing",
            //     link: "",
            // },
        ]
    },
    schoolLinks: {
        title: "footer.schoolLinks",
        links: [
            {
                label: "history",
                link: "",
                disabled: true,
            },
            {
                label: "community",
                link: "",
                disabled: true,
            },
            {
                label: "events",
                link: "",
                disabled: true,
            },
            {
                label: "payments",
                link: "",
                disabled: true,
            },
        ]
    },
    contactInfo: {
        title: "footer.contactInfo",
        address: "123 Main Street Str. London",
        phone: "+20 115 940 8650",
        phoneIcon: FaPhone,
        email: "nage7app@gmail.com",
        emailIcon: MdEmail,
        socialLinks: [
            {
               icon: FaFacebookF,
               link: "",
               disabled: true,
            },
            {
               icon: FaTwitter,
               link: "",
               disabled: true,
            },
            {
               icon: FaLinkedinIn,
               link: "",
               disabled: true,
            },
            {
               icon: FaPinterest,
               link: "",
               disabled: true,
            },
        ]
    }
}