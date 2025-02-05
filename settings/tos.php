<?php

namespace RRZE\Legal;

defined('ABSPATH') || exit;

$settings = [
    'version' => 1,
    'options_page' => [
        'parent' => [
            'slug' => 'legal',
        ],
        'page' => [
            'title' => __('Legal Mandatory Information', 'rrze-legal'),
        ],
        'menu' => [
            'title' => __('Legal Mandatory Information', 'rrze-legal'),
            'capability' => 'manage_options',
            'slug' => 'legal',
            'position' => 10,
        ],
    ],
    'settings' => [
        'title' => __('Legal Mandatory Information Settings', 'rrze-legal'),
        'sections' => [
            [
                'id' => 'imprint',
                'title' => __('Imprint', 'rrze-legal'),
                'hide_title' => true,
                'description' => sprintf(
                    /* translators: %s: Url of the endpoint page. */
                    __('The output of this settings page is available at the following link: %s', 'rrze-legal'),
                    tos()->endpointLink('imprint')
                ),
                'subsections' => [
                    [
                        'id' => 'scope',
                        'title' => __('Scope', 'rrze-legal'),
                        'description' => '',
                        'fields' => [
                            [
                                'name' => 'scope_websites',
                                'label' => __('Websites', 'rrze-legal'),
                                'description' => __('If this imprint applies to more than one website, add here the domain namens of the other websites. Please enter one domain name per line.', 'rrze-legal'),
                                'type' => 'textarea',
                                'default' => tos()->getSiteUrlHost(),
                                'sanitize_callback' => [tos(), 'sanitizeTextareaList'],
                            ],
                        ],
                    ],
                    [
                        'id' => 'responsible_person',
                        'title' => __('Responsible Person', 'rrze-legal'),
                        'description' => __('Data for contacting in legal terms.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'responsible_person_name',
                                'label' => __('Name', 'rrze-legal'),
                                'description' => __('Legally responsible person for the website. (This is usually the chair owner or facility manager).', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                                'template' => ['' => 'imprint-no-responsible-person'],
                            ],
                            [
                                'name' => 'responsible_person_email',
                                'label' => __('Email', 'rrze-legal'),
                                'type' => 'email',
                                'sanitize_callback' => function ($input) {
                                    return tos()->validateEmail($input);
                                },
                            ],
                            [
                                'name' => 'responsible_person_street',
                                'label' => __('Street Name & House Number', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'responsible_person_postal_code',
                                'label' => __('Postal Code', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'responsible_person_city',
                                'label' => __('City', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'responsible_person_phone',
                                'label' => __('Phone', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'responsible_person_fax',
                                'label' => __('Fax Number', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'responsible_person_organization',
                                'label' => __('Organization', 'rrze-legal'),
                                'type' => 'text',
                                'default' => tos()->getSiteUrlHost(),
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                        ],
                    ],
                    [
                        'id' => 'webmaster',
                        'title' => __('Webmaster', 'rrze-legal'),
                        'description' => __('Data for contacting the content of the website.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'webmaster_name',
                                'label' => __('Name', 'rrze-legal'),
                                'description' => __('Name of the webmaster or the responsible web editor.', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'webmaster_email',
                                'label' => __('Email', 'rrze-legal'),
                                'type' => 'email',
                                'default' => get_option('admin_email'),
                                'sanitize_callback' => function ($input) {
                                    return tos()->validateEmail($input);
                                },
                                'required' => true,
                            ],
                            [
                                'name' => 'webmaster_phone',
                                'label' => __('Phone', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                        ],
                    ],
                    [
                        'id' => 'optional',
                        'title' => __('Optional Information', 'rrze-legal'),
                        'description' => __('This option allows you to change predefined paragraphs, as well as to add another self-phrased paragraph.<br>Note: Official FAU facilities should have all of the following options enabled.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'optional_representation',
                                'label' => __('Reference to the University Management', 'rrze-legal'),
                                'description' => __('Official representative of the university and its outward institutions is the president. For this purpose, a corresponding paragraph is displayed.', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                                'template' => ['1' => 'imprint-representation'],
                            ],
                            [
                                'name' => 'optional_supervisory_authority',
                                'label' => __('Supervisory Authority', 'rrze-legal'),
                                'description' => __('Displays the supervisory authority.', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                                'template' => ['1' => 'imprint-supervisory-authority'],
                            ],
                            [
                                'name' => 'optional_id_numbers',
                                'label' => __('Identification Numbers', 'rrze-legal'),
                                'description' => __('Display of public and official identification numbers of the university.', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                                'template' => ['1' => 'imprint-id-numbers'],
                            ],
                            [
                                'name' => 'optional_it_security',
                                'label' => __('IT Security', 'rrze-legal'),
                                'description' => __('Note and contact details for reporting IT security incidents.', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                                'template' => ['1' => 'imprint-it-security'],
                            ],
                            [
                                'name' => 'optional_image_rights',
                                'label' => __('Image Rights', 'rrze-legal'),
                                'description' => __('Insert free text field for image rights?', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                            ],
                            [
                                'name' => 'optional_image_rights_content',
                                'label' => __('Content', 'rrze-legal'),
                                'description' => __('Optional paragraph for the description of any image rights used.', 'rrze-legal'),
                                'type' => 'wpeditor',
                                'default' => '',
                            ],
                            [
                                'name' => 'optional_new_section',
                                'label' => __('Add a New Section', 'rrze-legal'),
                                'description' => '',
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                            ],
                            [
                                'name' => 'optional_new_section_content',
                                'label' => __('Content', 'rrze-legal'),
                                'description' => __('Content of the new, additional section.', 'rrze-legal'),
                                'type' => 'wpeditor',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id' => 'privacy',
                'title' => __('Privacy', 'rrze-legal'),
                'hide_title' => true,
                'description' => sprintf(
                    /* translators: %s: Url of the endpoint page. */
                    __('The output of this settings page is available at the following link: %s', 'rrze-legal'),
                    tos()->endpointLink('privacy')
                ),
                'subsections' => [
                    [
                        'id' => 'dpo',
                        'title' => __('Data Protection Officer', 'rrze-legal'),
                        'hide_section' => apply_filters('rrze_legal_privacy_hide_dpo_section', false),
                        'description' => __("The designation, position and tasks of a data protection officer (DPO) within an organization are described in Articles 37, 38 and 39 of the European Union (EU) General Data Protection Regulation (GDPR).", 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'dpo_name',
                                'label' => __('Name', 'rrze-legal'),
                                'description' => '',
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                                'template' => ['' => 'privacy-no-dpo'],
                            ],
                            [
                                'name' => 'dpo_email',
                                'label' => __('Email', 'rrze-legal'),
                                'type' => 'email',
                                'sanitize_callback' => function ($input) {
                                    return tos()->validateEmail($input);
                                },
                            ],
                            [
                                'name' => 'dpo_street',
                                'label' => __('Street Name & House Number', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'dpo_postal_code',
                                'label' => __('Postal Code', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'dpo_city',
                                'label' => __('City', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                                'required' => true,
                            ],
                            [
                                'name' => 'dpo_phone',
                                'label' => __('Phone', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'dpo_fax',
                                'label' => __('Fax Number', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                        ],
                    ],
                    [
                        'id' => 'services',
                        'title' => __('Services', 'rrze-legal'),
                        'description' => __('If any of the following services are used, enable them to generate a corresponding notice in the privacy policy.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'services_contact_form',
                                'label' => __('Contact Form', 'rrze-legal'),
                                'description' => __('Do you use a contact form on this website? (The accessibility declaration offers one, so the answer is usually "yes").', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '1',
                                'inline' => true,
                                'template' => ['1' => 'privacy-contact-form'],
                            ],
                            [
                                'name' => 'services_registration_forms',
                                'label' => __('Registration/Registration Forms', 'rrze-legal'),
                                'description' => __('Do you use forms to sign up for events or other functions that require registration?', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => tos()->isRsvpActive() ? '1' : '0',
                                'inline' => true,
                                'template' => ['1' => 'privacy-registration-forms'],
                            ],
                            [
                                'name' => 'services_newsletter',
                                'label' => __('Newsletter/Mailinglist', 'rrze-legal'),
                                'description' => __('Do you offer a newsletter or mailing list?', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => tos()->isNewsletterActive() ? '1' : '0',
                                'inline' => true,
                                'template' => ['1' => 'privacy-newsletter'],
                            ],
                            /*
                            [
                                'name' => 'services_corona_contact_tracking',
                                'label' => __('Corona Contact Tracking', 'rrze-legal'),
                                'description' => __('Display the data on Corona contact tracking for events.', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                                'template' => ['1' => 'privacy-corona-contact-tracking'],
                            ],
                            */
                        ],
                    ],
                    [
                        'id' => 'external_services',
                        'title' => __('External Service Providers', 'rrze-legal'),
                        'description' => __('If external service providers are used to include content on the website, they must also be included in the privacy policy.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'service_providers',
                                'label' => __('Service Providers', 'rrze-legal'),
                                'description' => '',
                                'type' => 'multicheckbox',
                                'options' => tos()->getServiceProvidersOptions(),
                                'default' => tos()->getServiceProvidersStatus(),
                            ],
                        ],
                    ],
                    [
                        'id' => 'optional',
                        'title' => __('Optional Information', 'rrze-legal'),
                        'description' => __('Additional information about the privacy policy.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'optional_new_section',
                                'label' => __('Add a New Section', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Yes', 'rrze-legal'),
                                    '0' => __('No', 'rrze-legal'),
                                ],
                                'default' => '0',
                                'inline' => true,
                            ],
                            [
                                'name' => 'optional_new_section_content',
                                'label' => __('Content', 'rrze-legal'),
                                'description' => __('Content of the new, additional section.', 'rrze-legal'),
                                'type' => 'wpeditor',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id' => 'accessibility',
                'title' => __('Accessibility', 'rrze-legal'),
                'hide_title' => true,
                'description' => sprintf(
                    /* translators: %s: Url of the endpoint page. */
                    __('The output of this settings page is available at the following link: %s', 'rrze-legal'),
                    tos()->endpointLink('accessibility')
                ),
                'subsections' => [
                    [
                        'id' => 'general',
                        'title' => __('General Information', 'rrze-legal'),
                        'description' => __('All public sector bodies are obliged to make their websites and / or mobile applications accessible in accordance with Directive (EU) 2016/2102 of the European Parliament and of the Council, or implementation in their respective national legislation. It also includes the provision of an Accessibility Declaration of Conformity, in which all web site and app operators must publicly state the status of the website and explain the reasons for which barriers exist.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'general_legal_area',
                                'label' => __('Legal Area', 'rrze-legal'),
                                'description' => __('Selection of the legal area to which the operator of the website belongs.', 'rrze-legal'),
                                'type' => 'select',
                                'options' => tos()->getLegalAreaOptions(),
                                'default' => 2,
                            ],
                        ],
                    ],
                    [
                        'id' => 'compliance_status',
                        'title' => __('Compliance Status', 'rrze-legal'),
                        'description' => __('Officially stated status of the website, as well as its contents regarding the fulfillment of the legal requirements.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'compliance_status_conformity',
                                'label' => __('Declaration of Conformity', 'rrze-legal'),
                                'description' => __('State of conformity in accordance with EU Directive 2102 and local legislation.', 'rrze-legal'),
                                'type' => 'select',
                                'options' => [
                                    '2'  => __('Completely compliant: the content is fully compliant with the accessibility standard without exceptions', 'rrze-legal'),
                                    '1'  => __('Partially Compliant: Some parts of the content are not fully compliant with the accessibility standard', 'rrze-legal'),
                                    '0'  => __('Non-compliant: The content does not comply with the accessibility standard', 'rrze-legal'),
                                    '-1' => __('Unknown: Content was not rated or rating results are not available', 'rrze-legal')
                                ],
                                'default' => '1',
                                'style' => [
                                    '-1' => 'alert-danger',
                                    '0'  => 'alert-danger',
                                    '1'  => 'alert-warning',
                                    '2'  => 'alert-success',
                                ],
                                'compliance' => [
                                    '-1' => false,
                                    '0'  => true,
                                    '1'  => true,
                                    '2'  => true,
                                ],
                            ],
                            [
                                'name' => 'compliance_status_method',
                                'label' => __('Method', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Self-Evaluation', 'rrze-legal'),
                                    '2' => __('Third party rating', 'rrze-legal')
                                ],
                                'default' => '1',
                                'inline' => true,
                            ],
                            [
                                'name' => 'compliance_status_creation_date',
                                'label' => __('Creation Date', 'rrze-legal'),
                                'size' => 'normal',
                                'type' => 'date',
                                'min' => '2018-01-01',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'compliance_status_last_review_date',
                                'label' => __('Last Review Date', 'rrze-legal'),
                                'size' => 'normal',
                                'type' => 'date',
                                'min' => '2018-01-01',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'compliance_status_report_url',
                                'label' => __('Report URL', 'rrze-legal'),
                                'description' => __('If there is a detailed review, this can be linked here.', 'rrze-legal'),
                                'type' => 'text',
                                'placeholder' => 'https://',
                                'sanitize_callback' => 'sanitize_url',
                            ],
                        ],
                    ],
                    [
                        'id' => 'statement',
                        'title' => __('Statement', 'rrze-legal'),
                        'description' => __('List and explain the problems with the implementation of accessibility.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'statement_non_accessible_content_helper',
                                'label' => __('Input Assistance For Non-Accessible Content', 'rrze-legal'),
                                'type' => 'radio',
                                'options' => [
                                    '1' => __('Fill out explanations manually', 'rrze-legal'),
                                    '0' => __('Use input help and supplement it with manual entries', 'rrze-legal'),
                                ],
                                'default' => '1',
                            ],
                            [
                                'name' => 'statement_non_accessible_content_list',
                                'label' => __('Non-Accessible Content (Selection List)', 'rrze-legal'),
                                'description' => __('Selection of the most common deficiencies that a website can have. However, when choosing one or more of the above-mentioned deficiencies, please provide below a plausible justification why this deficiency exists and which alternatives are available in order to access the content nevertheless.', 'rrze-legal'),
                                'type' => 'multicheckbox',
                                'options' => [
                                    '1' =>  __('PDF documents created before 23.09.2018 could not yet be converted to an accessible format.', 'rrze-legal'),
                                    '2' =>  __('PDF documents created after 23.09.2018 do not yet have an accessible format.', 'rrze-legal'),
                                    '3' =>  __('Some documents have been provided by third parties (for example, the Examination Office, other FAU bodies, ministries, etc.). These documents are not available in an accessible version.', 'rrze-legal'),
                                    '4' =>  __('Embedded videos currently have no subtitles or transcription available.', 'rrze-legal'),
                                    '5' =>  __('Currently there is no textual description for directions describing maps or maps.', 'rrze-legal'),
                                    '6' =>  __('Graphics or images contained in the pages are currently not completely supplemented by text descriptions.', 'rrze-legal'),
                                    '7' =>  __('Tables are used for the purpose of optical design.', 'rrze-legal'),
                                    '8' =>  __('When using multilingual content on a page, sometimes the languages ​​are not correctly marked in HTML.', 'rrze-legal'),
                                    '9' =>  __('The font color in the logo with the full title of the website does not have enough contrast.', 'rrze-legal'),
                                ],
                            ],
                            [
                                'name' => 'statement_non_accessible_content_text',
                                'label' => __('Non-Accessible Content (Free Text)', 'rrze-legal'),
                                'description' => __('The website owner is obliged to publicly list all non-accessible components of the website and its contents. These must be specified here.', 'rrze-legal'),
                                'type' => 'wpeditor',
                            ],
                            [
                                'name' => 'statement_non_accessible_content_reason',
                                'label' => __('Reason', 'rrze-legal'),
                                'description' => __('In addition to the pure list of non-accessible contents, a justification for each of the above points should also be provided as to why barrier-free accessibility could not be achieved. Please note that the legislator lists the following reasons as unjustified: "Lack of priorities, time or ignorance". These items should not be used as justification.', 'rrze-legal'),
                                'type' => 'wpeditor',
                            ],
                            [
                                'name' => 'statement_non_accessible_content_alternative',
                                'label' => __('Alternatives', 'rrze-legal'),
                                'description' => __('Indicate here whether and which alternatives are available to obtain the above inaccessible content. This can be, for example, the contact via the feedback form or the indication of a body that provides help.', 'rrze-legal'),
                                'type' => 'wpeditor',
                            ],
                        ],
                    ],
                    [
                        'id' => 'feedback',
                        'title' => __('Feedback Mechanism', 'rrze-legal'),
                        'description' => __('Opportunities to contact for accessibility issues and errors.', 'rrze-legal'),
                        'fields' => [
                            [
                                'name' => 'feedback_contact_person',
                                'label' => __('Contact Person', 'rrze-legal'),
                                'description' => __('Enter a name for the responsible contact person for complaints or requests for help about lack of accessibility.', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'feedback_contact_email',
                                'label' => __('Contact Email Addresse', 'rrze-legal'),
                                'description' => __('Recipient email address for complaints or requests for help about lack of accessibility. Please note: If a request about the possibility of contact remains completely or partially unanswered within six weeks, the supervisory authority will check at the request of the user whether measures are required in the context of the monitoring of the operator of the website (ie you).', 'rrze-legal'),
                                'type' => 'email',
                                'default' => get_option('admin_email'),
                                'sanitize_callback' => function ($input) {
                                    return tos()->validateEmail($input);
                                },
                            ],
                            [
                                'name' => 'feedback_email_cc',
                                'label' => __('Email CC', 'rrze-legal'),
                                'description' => __('Optional additional email address.', 'rrze-legal'),
                                'type' => 'email',
                                'sanitize_callback' => function ($input) {
                                    return tos()->validateEmail($input);
                                },
                            ],
                            [
                                'name' => 'feedback_email_subject',
                                'label' => __('Email Subject', 'rrze-legal'),
                                'type' => 'text',
                                'default' => __('Accessibility Feedback Form', 'rrze-legal'),
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'feedback_contact_phone',
                                'label' => __('Contact Phone', 'rrze-legal'),
                                'description' => __('Contact number for telephone assistance.', 'rrze-legal'),
                                'type' => 'text',
                                'sanitize_callback' => 'sanitize_text_field',
                            ],
                            [
                                'name' => 'feedback_contact_address',
                                'label' => __('Contact Address', 'rrze-legal'),
                                'description' =>  __('Postal address as an alternative to email address.', 'rrze-legal'),
                                'type' => 'textarea',
                                'sanitize_callback' => 'sanitize_textarea_field',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
];
