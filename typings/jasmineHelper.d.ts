declare const describe: { (name: string, specs: { (): any }) };
declare const it: { (name: string, spec: { (done?: Function): any }) };
declare const beforeEach: { (setup: { (): any }) };
declare const afterEach: { (cleanup: { (): any }) };
