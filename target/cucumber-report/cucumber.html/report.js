$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create account test",
  "description": "",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18142132000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter email for registration",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on create account link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User fill personal information form \u003c\"George\"\u003e \u003c\"Smith\"\u003e \u003c\"Hello1234\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fill address details \u003c\"1 Nice Building\"\u003e \u003c\"Maryland\"\u003e \u003c\"Ohio\"\u003e \u003c\"12345\"\u003e \u003c\"United States\"\u003e \u003c\"0123456789\"\u003e \u003c\"main home\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should create account successfully and get \u003c\"My account\"\u003e text",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 493995400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "duration": 4597923100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userEnterEmailForRegistration()"
});
formatter.result({
  "duration": 1602656200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userClickOnCreateAccountLink()"
});
formatter.result({
  "duration": 305438300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 38
    },
    {
      "val": "Smith",
      "offset": 49
    },
    {
      "val": "Hello1234",
      "offset": 59
    }
  ],
  "location": "CreateAccountTest.userFillPersonalInformationForm(String,String,String)"
});
formatter.result({
  "duration": 2570284700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 28
    },
    {
      "val": "Maryland",
      "offset": 48
    },
    {
      "val": "Ohio",
      "offset": 61
    },
    {
      "val": "12345",
      "offset": 70
    },
    {
      "val": "United States",
      "offset": 80
    },
    {
      "val": "0123456789",
      "offset": 98
    },
    {
      "val": "main home",
      "offset": 113
    }
  ],
  "location": "CreateAccountTest.userFillAddressDetails(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1595650200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountTest.userClickOnRegisterButton()"
});
formatter.result({
  "duration": 2910694500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 50
    }
  ],
  "location": "CreateAccountTest.userShouldCreateAccountSuccessfullyAndGetText(String)"
});
formatter.result({
  "duration": 178709700,
  "status": "passed"
});
formatter.after({
  "duration": 3010513800,
  "status": "passed"
});
formatter.uri("signInPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SIgn in page test",
  "description": "",
  "id": "sign-in-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5265710100,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027TL-HEN-ICTS-01\u0027, ip: \u0027192.168.0.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [09b618b24a8b439b71382439eba922dd, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57618}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57618/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 09b618b24a8b439b71382439eba922dd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:328)\r\n\tat com.automation.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:43)\r\n\tat com.automation.cucumber.Hooks.setUP(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to sign-in page successfully",
  "description": "",
  "id": "sign-in-page-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on sign-in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify sign-in page text \u003c\"AUTHENTICATION\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userVerifySignInPageText(String)"
});
formatter.result({
  "status": "skipped"
});
