using System.Reflection;
using System.Runtime.CompilerServices;

// Information about this assembly is defined by the following attributes.
// Change them to the values specific to your project.

[assembly: AssemblyTitle ("userAuth.cpl")]
[assembly: AssemblyDescription ("")]
[assembly: AssemblyConfiguration ("")]
[assembly: AssemblyCompany ("")]
[assembly: AssemblyProduct ("")]
[assembly: AssemblyCopyright ("RonThomas")]
[assembly: AssemblyTrademark ("")]
[assembly: AssemblyCulture ("")]

// The assembly version has the format "{Major}.{Minor}.{Build}.{Revision}".
// The form "{Major}.{Minor}.*" will automatically update the build and revision,
// and "{Major}.{Minor}.{Build}.*" will update just the revision.

[assembly: AssemblyVersion ("0.1.1*")]

// The following attributes are used to specify the signing key for the assembly,
// if desired. See the Mono documentation for more information about signing.

//[assembly: AssemblyDelaySign(false)]
//[assembly: AssemblyKeyFile("")]

[assembly: Assembly(true)]
[assembly: AssemblyKeyFile("$KEYFILE")]
[assembly: AssemblyDelaySign(false)]
[assembly: AssemblyDefaultAlias("$DefaultAliasAttribute")]
[assembly: ReferenceAssembly("userAuth")]
[assembly: AssemblyInformationalVersion("$SystemAssemblyInformationalVersion")]

// The preceding chnages contain the completed values "(Discrete), (Command), (Deploy), (Image)"
// The set "(Deploy)*(Image)." are imported to control then deploy the system image,
// except "(Command)*(Deploy)*(Image)." will only control package deployment.