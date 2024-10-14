import type { Struct, Schema } from '@strapi/strapi';

export interface HeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_header_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    href: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link'>;
    ariaLabel: Schema.Attribute.Text;
  };
}

export interface HeaderLinkWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_header_link_with_descriptions';
  info: {
    displayName: 'linkWithDescription';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    href: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    ariaLabel: Schema.Attribute.Text;
  };
}

export interface HeaderDropdown extends Struct.ComponentSchema {
  collectionName: 'components_header_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    footer: Schema.Attribute.Component<'header.link-with-description', false>;
    additionalLinks: Schema.Attribute.Component<'header.link', true>;
    type: Schema.Attribute.Enumeration<['dropdown']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'dropdown'>;
    mainLinks: Schema.Attribute.Component<'header.link-with-description', true>;
  };
}

export interface HeaderButton extends Struct.ComponentSchema {
  collectionName: 'components_header_buttons';
  info: {
    displayName: 'Button';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    href: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    ariaLabel: Schema.Attribute.Text;
  };
}

export interface HeaderButtonGroup extends Struct.ComponentSchema {
  collectionName: 'components_header_button_groups';
  info: {
    displayName: 'ButtonGroup';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'header.button', true>;
    type: Schema.Attribute.Enumeration<['buttons']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'buttons'>;
  };
}

export interface FooterSingleColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_single_columns';
  info: {
    displayName: 'SingleColumn';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    columnTitle: Schema.Attribute.String;
    links: Schema.Attribute.Component<'header.link', true>;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.Component<'header.link', true>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    columns: Schema.Attribute.Component<'footer.single-column', true>;
  };
}

export interface FooterFooterInformation extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_informations';
  info: {
    displayName: 'FooterInformation';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    copyright: Schema.Attribute.Component<'footer.copyright', false>;
    socialLinks: Schema.Attribute.Component<'footer.app-links', false>;
  };
}

export interface FooterFooterContainer extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_containers';
  info: {
    displayName: 'FooterContainer';
    icon: 'link';
    description: '';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.footer-links', false>;
    information: Schema.Attribute.Component<'footer.footer-information', false>;
  };
}

export interface FooterCopyright extends Struct.ComponentSchema {
  collectionName: 'components_footer_copyrights';
  info: {
    displayName: 'Copyright';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface FooterAppLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_app_links';
  info: {
    displayName: 'AppLinks';
    description: '';
  };
  attributes: {
    link: Schema.Attribute.Component<'header.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.link': HeaderLink;
      'header.link-with-description': HeaderLinkWithDescription;
      'header.dropdown': HeaderDropdown;
      'header.button': HeaderButton;
      'header.button-group': HeaderButtonGroup;
      'footer.single-column': FooterSingleColumn;
      'footer.links': FooterLinks;
      'footer.footer-links': FooterFooterLinks;
      'footer.footer-information': FooterFooterInformation;
      'footer.footer-container': FooterFooterContainer;
      'footer.copyright': FooterCopyright;
      'footer.app-links': FooterAppLinks;
    }
  }
}
