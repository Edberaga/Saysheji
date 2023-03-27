module.exports = `
    type Social {
        id: ID!
        icon: String
        link: String
        title: String
    }
    type Heading {
        content: String!
        level: String
    }
    type Text {
        content: String!
    }
    type Image @infer{
        src: File @fileByRelativePath
        alt: String
    }
    type SectionTitle {
        id: ID!
        title: String
        subtitle: String
        description: String
        icon: Image
        iconBg: IconBg
        align: Align
        iconAlign: IconAlign
        dividerBg: DividerBg
        color: TextColor
        showIcon: Boolean
    }
  
    enum IconBg {
        primary
        secondary
    }
    enum Align {
        left
        right
        center
    }
    enum IconAlign {
        left
        right
        center
    }
    enum DividerBg {
        primary
        secondary
    }
    enum TextColor {
        white
        primary
    }

    type Button {
        id: ID!
        content: String!
        path: String
        variant: ButtonVariant
        color: ButtonColor
        size: ButtonSize
        shape: ButtonShape
    }

    enum ButtonVariant {
        outlined
        iconButton
    }
    enum ButtonColor {
        primary
        secondary
        dark
        light
        warning
        outlineDanger
        borderGradient
        outlineWarning
        outlinePrimary
        outlineSecondary
        borderNormal
        bgSuccess
        bgWhite
    }
    enum ButtonSize {
        xsmall
        small
        medium
        large
        fullwidth
    }
    enum ButtonShape {
        square
        rounded
        rounded5
        rounded10
        rounded15
        oval
    }
`;
