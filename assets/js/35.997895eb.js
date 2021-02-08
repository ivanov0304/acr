(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{385:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"acr-roles-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acr-roles-permissions"}},[e._v("#")]),e._v(" ACR Roles & Permissions")]),e._v(" "),s("p",[e._v("ACR supports a set of permissions, assigned to specific Azure Roles.\nUsing Azure IAM, specific permissions can be assigned to users and/or service principals.\nThe below table represents the Azure Roles and the ACR Permissions applied")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Role/Permission")]),e._v(" "),s("th",[s("a",{attrs:{href:"#arm-access"}},[e._v("ARM Access")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#create/delete-acr"}},[e._v("Create/Delete ACR")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#push"}},[e._v("Push")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#pull"}},[e._v("Pull")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#policy-changes"}},[e._v("Policy Changes")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#change-quarantine-state"}},[e._v("Change Quarantine State")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#pull-quarantine-images"}},[e._v("Pull Quarantine Images")])]),e._v(" "),s("th",[s("a",{attrs:{href:"#signature-signing"}},[e._v("Signature Signing")])])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Owner")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("Contributor")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("Reader")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("AcrPush")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("AcrPull")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("AcrQuarantineWriter")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("AcrQuarantineReader")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")]),e._v(" "),s("td")]),e._v(" "),s("tr",[s("td",[e._v("AcrImageSigner")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("X")])])])]),e._v(" "),s("h2",{attrs:{id:"differentiating-users-and-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#differentiating-users-and-services"}},[e._v("#")]),e._v(" Differentiating Users and Services")]),e._v(" "),s("p",[e._v("Anytime permissions are applied, best practices suggest providing the most limited set of permissions for a person, or service, to accomplish their task. The following permission sets represent a set of capabilities that may be used by humans and headless services.")]),e._v(" "),s("h3",{attrs:{id:"ci-cd-solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-solutions"}},[e._v("#")]),e._v(" CI/CD Solutions")]),e._v(" "),s("p",[e._v("When automating "),s("code",[e._v("docker build")]),e._v("s from CI/CD solutions, you'll need "),s("code",[e._v("docker push")]),e._v(" capabilities. For these headless service scenarios, we'd suggest assinging the "),s("strong",[e._v("AcrPush")]),e._v(" role. This limits the account from access through the portal. While we don't worry about code going rouge and doing additional destructive tasks, depending on how you limit the access keys, users may get the username/password credentials required to do damage.")]),e._v(" "),s("h3",{attrs:{id:"container-host-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-host-nodes"}},[e._v("#")]),e._v(" Container Host Nodes")]),e._v(" "),s("p",[e._v("Likewise, nodes running your containers will need the "),s("strong",[e._v("AcrPull")]),e._v(" role, but shouldn't require "),s("strong",[e._v("reader")]),e._v(" capabilities.")]),e._v(" "),s("h3",{attrs:{id:"tools-like-the-vs-code-acr-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools-like-the-vs-code-acr-extension"}},[e._v("#")]),e._v(" Tools like the VS Code ACR extension")]),e._v(" "),s("p",[e._v("For tools like the VS Code ACR extension, additional resource provider access will be required to list the set of registries available. In this case, you would provide your users access to the "),s("strong",[e._v("reader")]),e._v(" and/or "),s("strong",[e._v("contributor")]),e._v(" role. These roles will allow "),s("code",[e._v("docker pull")]),e._v(", "),s("code",[e._v("docker push")]),e._v(" and "),s("code",[e._v("az acr list")]),e._v(", "),s("code",[e._v("az acr build")]),e._v(" and other capabilities.")]),e._v(" "),s("h2",{attrs:{id:"arm-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arm-access"}},[e._v("#")]),e._v(" ARM Access")]),e._v(" "),s("p",[e._v("ARM represents the Azure Resource Manager. ARM access is required for the Azure Portal and "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("az cli"),s("OutboundLink")],1),e._v(". To get a list of registries, such as "),s("code",[e._v("az acr list")]),e._v(", you will need this permission set.")]),e._v(" "),s("h2",{attrs:{id:"create-delete-acr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-delete-acr"}},[e._v("#")]),e._v(" Create/Delete ACR")]),e._v(" "),s("p",[e._v("The ability to create and delete registries")]),e._v(" "),s("h2",{attrs:{id:"push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[e._v("#")]),e._v(" Push")]),e._v(" "),s("p",[e._v("The ability to "),s("code",[e._v("docker push")]),e._v(" an image to the registry")]),e._v(" "),s("h2",{attrs:{id:"pull"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[e._v("#")]),e._v(" Pull")]),e._v(" "),s("p",[e._v("The ability to "),s("code",[e._v("docker pull")]),e._v(" an image, that has not been quarantined, from the registry.")]),e._v(" "),s("h2",{attrs:{id:"policy-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#policy-changes"}},[e._v("#")]),e._v(" Policy Changes")]),e._v(" "),s("p",[e._v("The ability to configure policies on the registry, such as image purging, enabling quarantine and image signing.")]),e._v(" "),s("h2",{attrs:{id:"change-quarantine-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-quarantine-state"}},[e._v("#")]),e._v(" Change Quarantine State")]),e._v(" "),s("p",[e._v("The ability to set the quarantine state of an image. This role should only be assigned to vulnerability scanners using service principals. Individual users, even operations people should use the vulnerability scanning solution to override the quarantine state.")]),e._v(" "),s("h2",{attrs:{id:"pull-quarantine-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull-quarantine-images"}},[e._v("#")]),e._v(" Pull Quarantine Images")]),e._v(" "),s("p",[e._v("The ability to "),s("code",[e._v("docker pull")]),e._v(" images by their digest, allowing a vulnerability scan.\n!Note: This role should only be assigned to vulnerability scanners using service principals. Individual users, even operations people should use the vulnerability scanning solution to override the quarantine state.")]),e._v(" "),s("h2",{attrs:{id:"signature-signing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature-signing"}},[e._v("#")]),e._v(" Signature Signing")]),e._v(" "),s("p",[e._v("The ability to sign images, usually assigned to an automated process, which would use service principals.")])])}),[],!1,null,null,null);t.default=r.exports}}]);