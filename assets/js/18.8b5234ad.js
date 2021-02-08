(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{392:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-custom-domains-with-azure-container-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-custom-domains-with-azure-container-registry"}},[e._v("#")]),e._v(" Using Custom Domains with Azure Container Registry")]),e._v(" "),a("p",[e._v("Every ACR is accessed using its login server. If you have a registry called "),a("code",[e._v("myregistry")]),e._v(", you access it using its default hostname, "),a("code",[e._v("myregistry.azurecr.io")]),e._v(" (in Azure Public Cloud.) As a customer belonging to an organization, you may prefer to access your registry using a custom domain that is associated with your organization, for instance, "),a("code",[e._v("container-registry.contoso.com")]),e._v(".")]),e._v(" "),a("p",[e._v("The following steps describe how you can achieve this.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?view=azure-cli-latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(": version 2.4.0 or higher")]),e._v(" "),a("ul",[a("li",[e._v("Consider using "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("A "),a("em",[e._v("premium")]),e._v(" Azure Container Registry. See "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-get-started-azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for instructions on how to create one.")])]),e._v(" "),a("li",[a("p",[e._v("Your custom domain names. The following two are required:")]),e._v(" "),a("ul",[a("li",[e._v("Custom registry domain to access the registry REST API. Example for the "),a("code",[e._v("contoso.com")]),e._v(" domain: "),a("code",[e._v("container-registry.contoso.com")])]),e._v(" "),a("li",[e._v("Custom data domain to access the registry content. Again, example for "),a("code",[e._v("contoso.com")]),e._v(": "),a("code",[e._v("eastus-registry-data.contoso.com")]),e._v(" "),a("ul",[a("li",[e._v("Note that the custom data domain is region specific. For geo-replicated registries, each region should have its own custom data endpoint.")])])])]),e._v(" "),a("p",[e._v("For each domain, you must prepare a single PEM formatted file containing the TLS private key and public certificate:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-----BEGIN PRIVATE KEY-----  \n.....  \n-----END PRIVATE KEY-----  \n-----BEGIN CERTIFICATE-----  \n.....  \n-----END CERTIFICATE-----\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("For example, using "),a("a",{attrs:{href:"https://github.com/openssl/openssl",target:"_blank",rel:"noopener noreferrer"}},[e._v("openssl"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Create a self-signed public cert and private key"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("openssl req -nodes -x509 -newkey rsa:4096 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -keyout container-registry.contoso.com.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -out container-registry.contoso.com.cert.pem -days "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("365")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/CN=container-registry.contoso.com/O=Contoso./C=US'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[e._v("Create a single file containing both the public certificate and private key"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" container-registry.contoso.com.key.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" container-registry-contoso-com-pem\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" container-registry.contoso.com.cert.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" container-registry-contoso-com-pem\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("li",[e._v("For each data domain, follow the same steps above to prepare the PEM formatted files containing the public certificate and private key.")])]),e._v(" "),a("p",[e._v("Azure Key Vault allows you to "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/certificate-scenarios",target:"_blank",rel:"noopener noreferrer"}},[e._v("create"),a("OutboundLink")],1),e._v(" Certificate Authority (CA) signed certificates.")]),e._v(" "),a("ul",[a("li",[e._v("If you choose to use the Azure Portal to create the certificates, be sure to select certificate content type as PEM.")])])])]),e._v(" "),a("h2",{attrs:{id:"prepare-your-existing-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-your-existing-registry"}},[e._v("#")]),e._v(" Prepare your existing registry")]),e._v(" "),a("p",[e._v("We will enable two features on your registry:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Data Endpoints:"),a("br"),e._v("\nThis feature provides a dedicated endpoint for downloading content from your registry. If you have a registry in East US, on enabling this feature, a data endpoint is automatically created for you: "),a("code",[e._v("myregistry.eastus.data.azurecr.io")])])]),e._v(" "),a("li",[a("p",[e._v("ACR Managed Identities:"),a("br"),e._v("\nManaged Identities provide a mechanism to associate an Azure Active Directory identity with your registry, while relieving you of the burden of managing credentials. To learn more, see the documentation "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nACR supports both user assigned and system assigned managed identities.")])])]),e._v(" "),a("h3",{attrs:{id:"enable-data-endpoints-and-managed-idenitites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-data-endpoints-and-managed-idenitites"}},[e._v("#")]),e._v(" Enable data endpoints and managed idenitites")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("az login")])]),e._v(" "),a("li",[a("code",[e._v("az account set -s <subscription-id-or-name>")])]),e._v(" "),a("li",[a("code",[e._v("az acr update --data-endpoint-enabled true -n myregistry")])]),e._v(" "),a("li",[e._v("You can either enable a system assigned managed identity, a user assigned managed identity, or both for your registry. We recommend using system assigned managed identity to enable advanced scenarios with virtual networks that, although not supported currently, are "),a("a",{attrs:{href:"#enhanced-security-with-virtual-networks"}},[e._v("coming soon")]),e._v(". Do "),a("em",[e._v("one")]),e._v(" of the following:\n"),a("ul",[a("li",[e._v("To enable only system assigned managed identity:\n"),a("ul",[a("li",[a("code",[e._v("az acr identity assign -n myregistry --identities [system]")])])])]),e._v(" "),a("li",[e._v("To enable user assigned managed identity, with or without a system identity:\n"),a("ul",[a("li",[e._v("Create a user assigned managed identity following the instructions "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/how-to-manage-ua-identity-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Do "),a("em",[e._v("one")]),e._v(" of the following:\n"),a("ul",[a("li",[e._v("To enable "),a("em",[e._v("only")]),e._v(" user assigned managed identity:\n"),a("ul",[a("li",[a("code",[e._v('az acr identity assign -n myregistry --identities "<arm-resource-id-of-user-assigned-identity>"')])])])]),e._v(" "),a("li",[e._v("To enable "),a("em",[e._v("both")]),e._v(" user and system assigned managed identities:\n"),a("ul",[a("li",[a("code",[e._v('az acr identity assign -n myregistry --identities "<arm-resource-id-of-user-assigned-identity>" [system]')])])])])])])])])])])]),e._v(" "),a("h2",{attrs:{id:"prepare-your-azure-key-vault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-your-azure-key-vault"}},[e._v("#")]),e._v(" Prepare your Azure Key Vault")]),e._v(" "),a("p",[e._v("For each domain, its TLS private key and public certificate pair must be added to an Azure Key Vault that is accessible by your registry as a single PEM formatted file. We recommend creating a new key vault containing only your TLS certificates and granting the registry's identity access to "),a("code",[e._v("get")]),e._v(" secret.")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create"),a("OutboundLink")],1),e._v(" a new Azure Key Vault.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/certificate-scenarios",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add"),a("OutboundLink")],1),e._v(" your certificates to the key vault.")]),e._v(" "),a("li",[e._v("Add an access policy to the key vault that grants your registry's identity access to "),a("code",[e._v("get")]),e._v(" secret:"),a("br"),e._v(" "),a("code",[e._v("az keyvault set-policy --name <your-kv-name> --secret-permissions get --spn <registry-system-or-user-mi-principal-id>")]),e._v(" "),a("ul",[a("li",[e._v("The output of the command to enable managed identities on the registry will contain the principal ids of the assiged identities.")]),e._v(" "),a("li",[e._v("Alternatively, you may obtain the principal ids using "),a("code",[e._v("az cli")]),e._v(":\n"),a("ul",[a("li",[e._v("For system assigned managed identity:\n"),a("ul",[a("li",[a("code",[e._v("az acr show -n myregistry --query identity.principalId -o tsv")])])])]),e._v(" "),a("li",[e._v("For user assigned managed identities, you may list them as follows and use the desired principal ID:\n"),a("ul",[a("li",[a("code",[e._v("az acr show -n myregistry --query identity.userAssignedIdentities")])])])])])])])])]),e._v(" "),a("p",[e._v("For greater isolation, we recommend that you put each certificate in its own key vault and set its access policy independently. The registry should always have access to the key vault secrets.")]),e._v(" "),a("h3",{attrs:{id:"enhanced-security-with-virtual-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-security-with-virtual-networks"}},[e._v("#")]),e._v(" Enhanced security with Virtual Networks")]),e._v(" "),a("p",[e._v("Azure Key Vault allows you to "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/key-vault/key-vault-overview-vnet-service-endpoints",target:"_blank",rel:"noopener noreferrer"}},[e._v("restrict access"),a("OutboundLink")],1),e._v(" to specific virtual networks only. ACR custom domains are currently "),a("em",[e._v("not supported")]),e._v(" where key vault access is restricted, but this is work in progress and will be available with system managed identities only.")]),e._v(" "),a("h2",{attrs:{id:"prepare-your-dns-zone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-your-dns-zone"}},[e._v("#")]),e._v(" Prepare your DNS zone")]),e._v(" "),a("ol",[a("li",[e._v("The custom registry domain must have a CNAME record with the target registry login server:"),a("br"),e._v(" "),a("code",[e._v("container-registry.contoso.com")]),e._v(" --\x3e "),a("code",[e._v("myregistry.azurecr.io")])]),e._v(" "),a("li",[e._v("The regional custom data domain must have a CNAME record with the target regional registry data endpoint:"),a("br"),e._v(" "),a("code",[e._v("eastus-registry-data.contoso.com")]),e._v(" --\x3e "),a("code",[e._v("myregistry.eastus.data.azurecr.io")]),e._v(" "),a("ul",[a("li",[e._v("The output of the command to enable data endpoints on the registry will contain the regional data endpoint.")])])])]),e._v(" "),a("h2",{attrs:{id:"contact-us"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contact-us"}},[e._v("#")]),e._v(" Contact us")]),e._v(" "),a("p",[e._v("As a final step, share the following with us by creating a support ticket ("),a("a",{attrs:{href:"https://azure.microsoft.com/support/create-ticket/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Support"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ul",[a("li",[e._v("Custom registry domain details\n"),a("ul",[a("li",[e._v("custom registry domain ("),a("code",[e._v("container-registry.contoso.com")]),e._v(")")]),e._v(" "),a("li",[e._v("key vault secret ID of the corresponding TLS data")]),e._v(" "),a("li",[e._v("client ID of the user assigned registry identity that has access to this secret (not required in case of system assigned)")])])]),e._v(" "),a("li",[e._v("Custom data domain details\n"),a("ul",[a("li",[e._v("regional custom data domain ("),a("code",[e._v("eastus-registry-data.contoso.com")]),e._v(")")]),e._v(" "),a("li",[e._v("key vault secret ID of the corresponding TLS data")]),e._v(" "),a("li",[e._v("client ID of the user assigned registry identity that has access to this secret (not required in case of system assigned)")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);