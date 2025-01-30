
import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><rect fill="none" height="176" rx="8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" width="176" x="40" y="40"/><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="176" x2="176" y1="24" y2="56"/><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="80" x2="80" y1="24" y2="56"/><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="40" x2="216" y1="88" y2="88"/><path d="M92,128h28l-16,20a16,16,0,1,1-11.3,27.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline fill="none" points="144 140 160 128 160 180" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg> ),
		edit: Edit,
		save: Save
	}
);