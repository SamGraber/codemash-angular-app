import { Subject } from 'rxjs/Subject';
import { RequestOptions } from '@angular/http';

import { HttpService } from './http.service';

interface INgHttpMock {
	get: Sinon.SinonSpy;
	put: Sinon.SinonSpy;
	post: Sinon.SinonSpy;
	delete: Sinon.SinonSpy;
}

describe('HttpService', () => {
	let http: HttpService;
	let ngHttp: INgHttpMock;

	beforeEach(() => {
		ngHttp = {
			get: sinon.spy(() => new Subject()),
			put: sinon.spy(() => new Subject()),
			post: sinon.spy(() => new Subject()),
			delete: sinon.spy(() => new Subject()),
		};

		http = new HttpService(<any>ngHttp);
	});

	it('should make a get request with any specified query string parameters', () => {
		const params: any = {
			prop: 1,
		};

		http.get('/test', params);

		sinon.assert.calledOnce(ngHttp.get);
		const args: any = ngHttp.get.firstCall.args;
		expect(args[0]).to.equal('/test');
		expect(args[1].search.toString()).to.equal('prop=1');
	});

	it('should default to an empty string for null or undefined parameters', (): void => {
		const params: any = {
			nullParam: null,
			undefinedParam: undefined,
		};

		http.get('/test', params);

		sinon.assert.calledOnce(ngHttp.get);
		const args: any = ngHttp.get.firstCall.args;
		expect(args[0]).to.equal('/test');
		expect(args[1].search.toString()).to.equal('nullParam=&undefinedParam=');
	});

	it('should make a post request with the data jsonized and a json content header', () => {
		const data = { prop: 'string' };

		http.post('/test', data);

		sinon.assert.calledOnce(ngHttp.post);
		const args: any = ngHttp.post.firstCall.args;
		expect(args[0]).to.equal('/test');
		expect(args[1]).to.equal(JSON.stringify(data));
		const options: RequestOptions = args[2];
		expect(options.headers.has('Content-Type')).to.be.true;
		expect(options.headers.get('Content-Type')).to.equal('application/json');
	});

	it('should make a put request with the data jsonized and a json content header', () => {
		const data = { prop: 'string' };

		http.put('/test', data);

		sinon.assert.calledOnce(ngHttp.put);
		const args: any = ngHttp.put.firstCall.args;
		expect(args[0]).to.equal('/test');
		expect(args[1]).to.equal(JSON.stringify(data));
		const options: RequestOptions = args[2];
		expect(options.headers.has('Content-Type')).to.be.true;
		expect(options.headers.get('Content-Type')).to.equal('application/json');
	});

	it('should parse the response from json', (): void => {
		const putStream: Subject<any> = new Subject();
		const response: any = {
			_body: 'content',
			json: sinon.spy(),
		};
		ngHttp.put = sinon.spy(() => putStream);

		http.put('/test', {}).subscribe();
		putStream.next(response);

		sinon.assert.calledOnce(response.json);
	});

	it('should not try to parse if the response is empty', (): void => {
		const putStream: Subject<any> = new Subject();
		const response: any = {
			_body: '',
			json: sinon.spy(),
		};
		ngHttp.put = sinon.spy(() => putStream);

		http.put('/test', {}).subscribe();
		putStream.next(response);

		sinon.assert.notCalled(response.json);
	});

	it('should make a delete request with any specified query string parameters', () => {
		const params: any = {
			prop: 1,
		};

		http.delete('/test', params);

		sinon.assert.calledOnce(ngHttp.delete);
		const args: any = ngHttp.delete.firstCall.args;
		expect(args[0]).to.equal('/test');
		expect(args[1].search.toString()).to.equal('prop=1');
	});
});
